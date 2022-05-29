import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/styleRegistration.css';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { mixed } from 'yup';
import Photo from './Photo';

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
			avatar: mixed()
				.test('isValuatedType', 'FIle should be .png .jpeg', (element) => {
					if (element[0] === undefined) {
						return false;
					}
					const file_type = element[0].type;
					if (
						(element && file_type === 'image/jpeg') ||
						file_type === 'image/png'
					) {
						if (!photo.url) {
							setPhoto(() => {
								return {
									url: URL.createObjectURL(element[0]),
									name: element[0].name,
								};
							});
						}
						if (photo.name !== element[0].name) {
							setPhoto(() => {
								return {
									url: URL.createObjectURL(element[0]),
									name: element[0].name,
								};
							});
						}
						return true;
					}
					return false;
				})
				.test('File is to large', 'File is bigger than 2mb', (value) => {
					if (value[0] === undefined) {
						return false;
					}
					return value && value[0].size <= 2000000;
				})
				.required('required'),
			last_name: yup.string().max(15).required(),
			email: yup.string().email().required(),
			password: yup.string().max(16).required(),
		})
		.required();

	// function getBase64(file) {
	// 	let reader = new FileReader();
	// 	reader.readAsDataURL(file);
	// 	reader.onload = function () {
	// 		return reader.result;
	// 	};
	// }

	const [photo, setPhoto] = useState({
		url: {},
		name: '',
	});
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
		data = {
			...data,
			avatar: data.avatar[0],
		};
		// const formData = new FormData();
		// formData.append('email', data.email);
		// formData.append('avatar', data.avatar, data.avatar.name);
		// formData.append('first_name', data.first_name);
		// formData.append('last_name', data.last_name);
		// formData.append('password', data.password);
		axios
			.post('http://127.0.0.1:8000/auth/users/', data, {
				headers: {
					'Content-Type': 'application/json',
				},
			})
			.then((data) => {
				alert(JSON.stringify(data));
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
				<label key={'avatar'} className={'registration-form_label'}>
					<Photo picked={photo.url} />
					<input
						className={'event-form_photo'}
						type='file'
						{...register('avatar')}
					/>
				</label>
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
