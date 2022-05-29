import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const Photo = ({ picked }) => {
	if (Object.keys(picked).length === 0) {
		return <FontAwesomeIcon icon={faCircleUser} style={{ height: '100px' }} />;
	}
	return (
		<div className={'registration-form_photo'}>
			<img src={picked} alt='' />
		</div>
	);
};
export default Photo;
