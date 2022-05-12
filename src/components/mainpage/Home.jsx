import React, { useEffect, useState } from 'react';
import SortingBy from '../event/SortingBy';
import Event from '../event/Event';
import axios from 'axios';
import '../../styles/styleMainPage.css';

const Home = () => {
	const [arrayOfPosts, setPosts] = useState([]);
	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				setPosts(res.data);
			})
			.catch((err) => {
				alert(err);
			});
	}, []);
	return (
		<div className='main_container'>
			<div className={'item_sorting_block'}>
				<SortingBy />
			</div>
			<div className={'item_all_events'}>
				{arrayOfPosts.map((element) => {
					return (
						<Event
							body={element.body}
							title={element.title}
							id={element.id}
							userId={element.userId}
							key={element.id}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Home;
