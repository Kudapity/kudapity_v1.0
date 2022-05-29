import React, { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import '../../styles/styleRegistration.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// const schema = yup
// 	.object({
// 		email: yup.string().required(),
// 		password: yup.string().max(16).required(),
// 	})
// 	.required();

const Login = ({ setToken }) => {
	const [isError, setIsError] = useState(false);
	const [ErrorData, setErrorData] = useState('');
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onBlur',
	});
	const onSubmit = (data, e) => {
		axios
			.post('http://127.0.0.1:8000/api/token/', data, {
				headers: { 'Content-Type': 'application/json' },
			})
			.then((data) => {
				console.log(data);
				window.localStorage.setItem('token', `${data.data.access}`);
				setToken(window.localStorage.getItem('token'));
				navigate('/');
			})
			.catch((err) => {
				setIsError(true);
				setErrorData(err.response.data.detail);
			});
	};

	return (
		<div className={'registration_container'}>
			<span className={'item_span_registration'}>Login</span>
			<p className={'item_registration_span'}>
				Haven't account yet? <Link to={'/signup'}>Create</Link>
			</p>
			<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='email'>
					<p className={'label'}>EMAIL</p>
				</label>
				<input
					type='email'
					className={'item_input'}
					{...register('email')}
					autoComplete='off'
					onChange={() => {
						setIsError(false);
					}}
				/>
				<p>{errors.name?.message}</p>
				<label htmlFor='password'>
					<p className={'label'}>PASSWORD</p>
				</label>
				<input
					type='password'
					className={'item_input'}
					{...register('password')}
					autoComplete='off'
				/>
				<p>{errors.password?.message}</p>
				<p>{isError && ErrorData}</p>
				<input
					type='submit'
					className={'registration-container_button'}
					value={'SUBMIT'}
				/>
			</form>
		</div>
	);
};

export default Login;
