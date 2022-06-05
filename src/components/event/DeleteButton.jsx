import React from 'react';
import axios from 'axios';
import '../../styles/styleEvent.css';

const SuccessfullyDelete = (id) => {
	const button = document.getElementById(`${id}`);
	button.disabled = true;
	button.innerText = 'Successful';
	button.classList.add('button_success');
};
const onClickHandler = (id) => {
	const url = `http://127.0.0.1:8000/events/delete/${id}/`;
	axios
		.delete(url, {
			headers: {
				Authorization: `Bearer ${window.localStorage.getItem('token')}`,
			},
		})
		.then((res) => {
			SuccessfullyDelete(id);
		})
		.catch((err) => {
			console.log(err);
		});
};

const DeleteButton = ({ eventId, isEmpty }) => {
	if (isEmpty) {
		return <></>;
	}
	return (
		<div className={'event-button_block'}>
			<button
				className={`event-button`}
				id={`${eventId}`}
				onClick={() => {
					onClickHandler(eventId);
				}}
			>
				delete
			</button>
		</div>
	);
};

export default DeleteButton;
