import React from 'react';
import { set, useForm } from 'react-hook-form';
import '../../styles/styleRegistration.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const schema = yup
	.object({
		email: yup.string().required(),
		password: yup.string().max(16).required(),
	})
	.required();

const Login = ({ setToken }) => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onBlur',
	});
	const onSubmit = (data, e) => {
		axios
			.post('http://127.0.0.1:8000/auth/token/login', data, {
				headers: { 'Content-Type': 'application/json' },
			})
			.then((data) => {
				window.localStorage.setItem('token', `${data.data.auth_token}`);
				setToken(window.localStorage.getItem('token'));
				navigate('/');
			})
			.catch((err) => {
				console.log(err.response.data);
			});
	};

	return (
		<div className={'registration_container'}>
			<span className={'item_span_registration'}>Login</span>
			<p className={'item_registration_span'}>
				Haven't account yet? <Link to={'/signup'}>Create</Link>
			</p>
			<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
				<input
					type='email'
					className={'item_input'}
					{...register('email')}
					autoComplete='off'
				/>
				<p>{errors.name?.message}</p>
				<input
					type='password'
					className={'item_input'}
					{...register('password')}
					autoComplete='off'
				/>
				<p>{errors.password?.message}</p>
				<input
					type='submit'
					className={'registration-container_button'}
					value={'Підтвердити'}
				/>
			</form>
		</div>
	);
};

export default Login;
