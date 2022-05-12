import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../styles/styleLayout.css';
import '../../styles/style.css';

const PrivateLayout = ({ setToken }) => {
	const onClickClean = () => {
		window.localStorage.removeItem('token');
		setToken(window.localStorage.getItem('token'));
	};
	return (
		<div className={'container'}>
			<header>
				<div className={'layout_image'}>
					<Link to='/'>
						<img
							src={require('../../img/logo_transparent.png')}
							alt='photo isn`t exist'
						/>
					</Link>
				</div>
				<div>
					<Link className={'layout_link'} to={'/addevent'}>
						Поділитись подією
					</Link>
				</div>
				<div>
					<button onClick={onClickClean} className={'layout_button'}>
						Log Out
					</button>
				</div>
			</header>
			<Outlet />
		</div>
	);
};

export default PrivateLayout;
