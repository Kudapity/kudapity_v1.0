import React, { useState } from 'react';
import Event from './Event';
import '../../styles/styleEvent.css';
const EventList = ({ array, button, styleClass }) => {
	if (array.length !== 0) {
		return (
			<div className={styleClass}>
				{array.map((element) => {
					return (
						<Event postData={element} key={element.title} button={button} />
					);
				})}
			</div>
		);
	}

	return (
		<div className={'item-event_notification'}>
			<p>There are no events</p>
		</div>
	);
};

export default EventList;
