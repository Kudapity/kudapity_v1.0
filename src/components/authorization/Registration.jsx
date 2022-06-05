import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/styleRegistration.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
	const schema = yup
		.object({
			first_name: yup
				.string()
				.max(16)
				.test('isNumber', 'Name should not contain numbers', (element) => {
					for (const elementElement of element) {
						if (!isNaN(elementElement)) {
							return false;
						}
					}
					return true;
				})
				.required(),
			last_name: yup.string().max(15).required(),
			email: yup.string().email().required(),
			password: yup.string().max(16).required(),
		})
		.required();

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		mode: 'onChange',
	});
	const onSubmit = (data, e) => {
		axios
			.post('http://127.0.0.1:8000/auth/users/', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((data) => {
				e.target.reset();
				navigate('/login');
			})
			.catch((err) => {
				console.log(err);
				alert(err.request.response);
			});
	};
	return (
		<div className={'registration_container'}>
			<span className={'item_span_registration'}>Create new account</span>
			<form className={'form'} onSubmit={handleSubmit(onSubmit)}>
				<label htmlFor='first_name'>
					<p className={'label'}>FIRST NAME</p>
				</label>
				<input
					type='text'
					{...register('first_name')}
					autoComplete='off'
					className={'item_input'}
				/>
				<p>{errors.name?.message}</p>
				<label htmlFor='last_name'>
					<p className={'label'}>LAST NAME</p>
				</label>
				<input
					type='text'
					{...register('last_name')}
					autoComplete='off'
					className={'item_input'}
				/>
				<p>{errors.surname?.message}</p>
				<label htmlFor='email'>
					<p className={'label'}>EMAIL</p>
				</label>
				<input
					type='text'
					{...register('email')}
					autoComplete='off'
					className={'item_input'}
				/>
				<p>{errors.email?.message}</p>
				<label htmlFor='password'>
					<p className={'label'}>PASSWORD</p>
				</label>
				<input
					type='password'
					{...register('password')}
					autoComplete='off'
					className={'item_input'}
				/>
				<p>{errors.password?.message}</p>
				<input
					type='submit'
					className={'registration-container_button'}
					value={'SUBMIT'}
				/>
			</form>
		</div>
	);
};

export default Registration;
