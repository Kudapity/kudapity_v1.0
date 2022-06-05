import React, { useEffect, useState } from 'react';
import SortingBy from '../event/SortingBy';
import Event from '../event/Event';
import axios from 'axios';
import '../../styles/styleMainPage.css';
import EventList from '../event/EventList';
const array_cities = [
	'Cherkasy',
	'Chernihiv',
	'Chernivtsi',
	'Dnipropetrovsk',
	'Donetsk',
	'Ivano-Frankivsk',
	'Kharkiv',
	'Kherson',
	'Khmelnytsk',
	'Kiyv',
	'Luhansk',
	'Lviv',
	'Mykolaiv',
	'Odesa',
	'Poltava',
	'Rivne',
	'Sevastopol',
	'Sumy',
	'Ternopil',
	'Vinnytsia',
	'Volyn',
	'Zakarpattia',
	'Zaporizhzhia',
	'Zhytomyr ',
	'Crimea',
];
const array_typesOfEvent = [
	'Entertainment',
	'Spectacle',
	'Exhibition',
	'Concert',
	'Meeting',
	'Courses',
	'Entertainment for children',
	'Showing movies',
	'Opening',
];
const array_day = ['this-month', 'this-week', 'tomorrow', 'today'];
const Home = () => {
	const url = 'http://127.0.0.1:8000/events/';
	const [filter, setFilter] = useState('');
	const [arrayOfPosts, setPosts] = useState([]);
	if (array_cities.includes(filter)) {
		setFilter('by-city/' + filter + '/');
	}
	if (array_day.includes(filter)) {
		setFilter(filter + '/');
	}
	if (array_typesOfEvent.includes(filter)) {
		setFilter('by-type/' + filter + '/');
	}
	if (filter.length === 1) {
		setFilter('');
	}
	useEffect(() => {
		axios
			.get(url + filter)
			.then((res) => {
				setPosts(res.data);
			})
			.catch((err) => {
				alert(err);
			});
	}, [filter]);
	return (
		<div className='main_container'>
			<div className={'item_sorting_block'}>
				<SortingBy filter={{ setFilter, filter }} />
			</div>
			<EventList
				array={arrayOfPosts}
				button={false}
				styleClass={'item_all_events'}
			/>
		</div>
	);
};

export default Home;
