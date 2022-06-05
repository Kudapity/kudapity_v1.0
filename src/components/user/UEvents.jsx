import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import EventList from '../event/EventList';
const UEvents = () => {
	const user_info = jwtDecode(window.localStorage.getItem('token'));
	const url = `http://127.0.0.1:8000/events/my_events/${user_info.user_id}/`;
	const [arrayOfPosts, setPosts] = useState([]);
	useEffect(() => {
		axios
			.get(url, {
				Authorization: `Bearer ${window.localStorage.getItem(`token`)}`,
			})
			.then((data) => {
				setPosts(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, [url]);

	return (
		<div>
			<div className='main_container'>
				<EventList
					array={arrayOfPosts}
					button={true}
					styleClass={'user-event_list'}
				/>
			</div>
			);
		</div>
	);
};

export default UEvents;
