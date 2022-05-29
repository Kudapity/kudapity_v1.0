import React from 'react';
import '../../styles/styleEvent.css';
function getFullDate(date) {
	if (date < 10) {
		date = '0' + date;
	}
	return date;
}
const Event = ({ postData, ...props }) => {
	const date = new Date(postData.event_date);

	return (
		<div className='item-event'>
			<div className={'item-event_header'}>
				<div className={'item-event_title'}>
					<p>{postData.title}</p>
				</div>
				<div className={'item-event_date'}>
					<p>
						{getFullDate(date.getHours()) +
							':' +
							getFullDate(date.getMinutes())}
					</p>
					<p>
						{getFullDate(date.getDay()) + '.' + getFullDate(date.getMonth())}
					</p>
				</div>
			</div>
			<div className={'item-event_img'}>
				{postData.img ? (
					<img src={postData.img} alt='' />
				) : (
					<img src={require('../../img/logo_transparent.png')} alt='' />
				)}
			</div>
			<div className={'item-event_describe'}>
				<p>{postData.describe}</p>
			</div>
			<div className={'item-event_header bottom'}>
				<p>{postData.ticket_price + ' UAH'}</p>
				<p>{postData.city}</p>
			</div>
		</div>
	);
};

export default Event;
