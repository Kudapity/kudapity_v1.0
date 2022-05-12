import React from 'react';
import '../../styles/styleEvent.css';
const Event = ({ title, body, id, userId, ...props }) => {
	return (
		<div className='item_event'>
			<div>
				title: {title}
				id = {id}
			</div>
			<div>
				description is {body}
				user id: {userId}
			</div>
		</div>
	);
};

export default Event;
