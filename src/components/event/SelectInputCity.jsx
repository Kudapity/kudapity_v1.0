import React from 'react';

const SelectInputCity = ({ register }) => {
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
	return (
		<div>
			<select
				name=''
				id=''
				defaultValue={'Lviv'}
				{...register('city')}
				className={'form_input'}
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
};

export default SelectInputCity;
