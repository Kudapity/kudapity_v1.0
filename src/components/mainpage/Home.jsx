import React, { useEffect, useState } from 'react';
import SortingBy from '../event/SortingBy';
import Event from '../event/Event';
import axios from 'axios';
import '../../styles/styleMainPage.css';
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
const Home = () => {
	const url = 'http://127.0.0.1:8000/events/';
	const [filter, setFilter] = useState('');
	console.log(filter);
	const [arrayOfPosts, setPosts] = useState([]);
	if (array_cities.includes(filter)) {
		console.log(filter + ' is city');
		setFilter('by-city/' + filter.toLowerCase());
	}
	if (array_typesOfEvent.includes(filter)) {
		console.log(filter + 'is type');
		setFilter('by-type/' + filter.toLowerCase());
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
			<div className={'item_all_events'}>
				{arrayOfPosts.map((element) => {
					return <Event postData={element} key={element.title} />;
				})}
			</div>
		</div>
	);
};

export default Home;
