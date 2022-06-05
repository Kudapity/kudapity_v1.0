import Registration from './components/authorization/Registration';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import Login from './components/authorization/Login';
import Home from './components/mainpage/Home';
import PrivateLayout from './components/layouts/PrivateLayout';
import { useState } from 'react';
import EventForm from './components/event/EventForm';
import UEvents from './components/user/UEvents';

function App() {
	//let token_null = JSON.parse(window.localStorage.getItem('token')) || {};
	let [token, setToken] = useState(window.localStorage.getItem('token'));
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path={'/'}
					element={token ? <PrivateLayout setToken={setToken} /> : <Layout />}
				>
					<Route index element={<Home />} />
					<Route
						path={'/addevent'}
						element={token ? <EventForm /> : <Navigate to={'/'} />}
					/>
					<Route path={'/signup'} element={<Registration />} />
					<Route path={'/login'} element={<Login setter={{ setToken }} />} />
					<Route
						path={'userevents'}
						element={
							token ? <UEvents user_info={token} /> : <Navigate to={'/login'} />
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
