import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../../styles/styleLayout.css';
import '../../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const PrivateLayout = ({ setToken }) => {
	const onClickDropdown = () => {
		let ul = document.getElementsByClassName('layout-dropdown')[0];
		ul.classList.toggle('layout-dropdown_on');
	};
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
						Share event
					</Link>
				</div>
				<div className={'layout-profile'}>
					<FontAwesomeIcon
						icon={faCircleUser}
						className={'layout-profile_icon'}
						onClick={onClickDropdown}
					/>
					<ul className={'layout-dropdown'}>
						<li>
							<Link className={'layout-link_dropdown'} to={'/userevents'}>
								my events
							</Link>
						</li>
						<li>
							<button onClick={onClickClean} className={'layout_button'}>
								log out
							</button>
						</li>
					</ul>
				</div>
			</header>
			<Outlet />
		</div>
	);
};

export default PrivateLayout;
