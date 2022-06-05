import React from 'react';
import '../../styles/styleEvent.css';
import axios from 'axios';
import DeleteButton from './DeleteButton';
function getFullDate(date) {
	if (date < 10) {
		date = '0' + date;
	}
	return date;
}

const Event = ({ postData, button }) => {
	const date = new Date(postData.event_date);
	return (
		<div className='item-event'>
			<div className={'top'}>
				<div className={'item-event_title'}>
					<p>{postData.title}</p>
				</div>
			</div>
			<div className={'item-event_describe'}>
				<p>{postData.describe}</p>
			</div>
			<div className={'item-event_header bottom'}>
				<div>
					<p>{postData.ticket_price + ' UAH'}</p>
				</div>
				<div>
					{' '}
					<p>{postData.type_of_event}</p>
				</div>
				<div>
					<div className={'item-event_header'}>
						<div>
							<p>{postData.city}</p>
							<p>{postData.address}</p>
						</div>
						<div className={'item-event_date'}>
							<p>
								{getFullDate(date.getHours()) +
									':' +
									getFullDate(date.getMinutes())}
							</p>
							<p>
								{getFullDate(date.getUTCDate()) +
									'.' +
									getFullDate(date.getMonth() + 1)}
							</p>
						</div>
					</div>
				</div>
			</div>
			<DeleteButton eventId={postData.id} isEmpty={!button} />
		</div>
	);
};

export default Event;
