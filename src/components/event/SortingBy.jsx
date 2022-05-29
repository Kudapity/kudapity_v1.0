import React from 'react';
import '../../styles/styleSortingBy.css';

const SortingBy = ({ filter }) => {
	const onChangeHandler = (value) => {
		if (value === '' || value === filter.filter) {
			return;
		}
		filter.setFilter(value);
	};

	return (
		<div className={'item-sorting_block'}>
			<p className={'item-sorting-title'}>select events:</p>
			<select
				name='DATE'
				id=''
				onChange={(e) => {
					onChangeHandler(e.target.value);
				}}
			>
				<option value=''>
					<span className={'item-sorting_option'}>select by date</span>
				</option>
				<option value='today'>
					<span className={'item-sorting_option'}>today</span>
				</option>
				<option value='tomorrow'>
					<span className={'item-sorting_option'}>tomorrow</span>
				</option>
				<option value='this_week'>
					<span className={'item-sorting_option'}>this week</span>
				</option>
				<option value='this_month'>
					<span className={'item-sorting_option'}>this month</span>
				</option>
			</select>
			<select
				name='city'
				id=''
				onChange={(e) => {
					onChangeHandler(e.target.value);
				}}
			>
				<option value=''>select by city</option>
				<option value='Cherkasy'>
					{' '}
					<span className={'item-sorting_option'}>Cherkasy</span>
				</option>
				<option value='Chernihiv'>
					<span className={'item-sorting_option'}>Chernihiv</span>
				</option>
				<option value='Chernivtsi'>
					<span className={'item-sorting_option'}>Chernivtsi</span>
				</option>
				<option value='Dnipropetrovsk'>
					<span className={'item-sorting_option'}>Dnipropetrovsk</span>
				</option>
				<option value='Donetsk'>
					<span className={'item-sorting_option'}>Donetsk</span>
				</option>
				<option value='Ivano-Frankivsk'>
					<span className={'item-sorting_option'}>Ivano-Frankivsk</span>
				</option>
				<option value='Kharkiv'>
					<span className={'item-sorting_option'}>Kharkiv</span>
				</option>
				<option value='Kherson'>
					<span className={'item-sorting_option'}>Kherson</span>
				</option>
				<option value='Khmelnytsk'>
					<span className={'item-sorting_option'}>Khmelnytsk</span>
				</option>
				<option value='Kiyv'>
					<span className={'item-sorting_option'}>Kiyv</span>
				</option>
				<option value='Luhansk'>
					<span className={'item-sorting_option'}>Luhansk</span>
				</option>
				<option value='Lviv'>
					<span className={'item-sorting_option'}>Lviv</span>
				</option>
				<option value='Mykolaiv'>
					<span className={'item-sorting_option'}>Mykolaiv</span>
				</option>
				<option value='Odesa'>
					<span className={'item-sorting_option'}>Odesa</span>
				</option>
				<option value='Poltava'>
					<span className={'item-sorting_option'}>Poltava</span>
				</option>
				<option value='Rivne'>
					<span className={'item-sorting_option'}>Rivne</span>
				</option>
				<option value='Sevastopol'>
					<span className={'item-sorting_option'}>Sevastopol</span>
				</option>
				<option value='Sumy'>
					<span className={'item-sorting_option'}>Sumy</span>
				</option>
				<option value='Ternopil'>
					<span className={'item-sorting_option'}>Ternopil</span>
				</option>
				<option value='Vinnytsia'>
					<span className={'item-sorting_option'}>Vinnytsia</span>
				</option>
				<option value='Volyn'>
					<span className={'item-sorting_option'}>Volyn</span>
				</option>
				<option value='Zakarpattia'>
					<span className={'item-sorting_option'}>Zakarpattia</span>
				</option>
				<option value='Zaporizhzhia'>
					<span className={'item-sorting_option'}>Zaporizhzhia</span>
				</option>
				<option value='Zhytomyr'>
					<span className={'item-sorting_option'}>Zhytomyr</span>
				</option>
				<option value='Crimea'>
					<span className={'item-sorting_option'}>Crimea</span>
				</option>
			</select>
			<select
				name='TYPE OF EVENT'
				id=''
				onChange={(e) => {
					onChangeHandler(e.target.value);
				}}
			>
				<option value=''>select by type of event</option>
				<option value='Entertainment'>
					<span className={'item-sorting_option'}>Entertainment</span>
				</option>
				<option value='Spectacle'>
					<span className={'item-sorting_option'}>Spectacle</span>
				</option>
				<option value='Exhibition'>
					<span className={'item-sorting_option'}>Exhibition</span>
				</option>
				<option value='Concert'>
					<span className={'item-sorting_option'}>Concert</span>
				</option>
				<option value='Meeting'>
					<span className={'item-sorting_option'}>Meeting</span>
				</option>
				<option value='Courses'>
					<span className={'item-sorting_option'}>Courses</span>
				</option>
				<option value='Entertainment for children'>
					<span className={'item-sorting_option'}>
						Entertainment for children
					</span>
				</option>
				<option value='Showing movies'>
					<span className='item-sorting_option'>Showing movies</span>
				</option>
				<option value='Opening'>
					<span className='item-sorting_option'>
						Entertainment for children
					</span>
				</option>
			</select>
		</div>
	);
};

export default SortingBy;
