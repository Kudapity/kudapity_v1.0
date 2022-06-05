import React from 'react';

const SelectInput = ({ register, type }) => {
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
	if (type === 'city') {
		return (
			<div>
				<select
					name=''
					id=''
					defaultValue={'Lviv'}
					{...register('city')}
					className={'form_input form-input_width'}
				>
					{array_cities.map((element) => {
						return (
							<option value={element} key={element}>
								{element}
							</option>
						);
					})}
				</select>
			</div>
		);
	} else {
		return (
			<div>
				<select
					name=''
					id=''
					defaultValue={'Entertainment'}
					{...register('type_of_event')}
					className={'form_input form-input_width'}
				>
					{array_typesOfEvent.map((element) => {
						return (
							<option value={element} key={element}>
								{element}
							</option>
						);
					})}
				</select>
			</div>
		);
	}
};

export default SelectInput;
