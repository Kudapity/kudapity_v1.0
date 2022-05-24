import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/styleEventForm.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { mixed } from 'yup';
import SelectInput from './SelectInput';
import axios from 'axios';

const EventForm = () => {
	const [photo, setPhoto] = useState({
		url: {},
		name: '',
	});
	const schema = yup
		.object({
			photo: mixed()
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
			describe: yup.string().max(120).min(2).required(),
			event_date: yup
				.date()
				.test('time', 'it should be in the future', (value) => {
					return new Date() < value;
				})
				.required('its required field'),
			ticket_price: yup
				.string()
				.test('positive number', 'Price should be positive number', (value) => {
					value = Number(value);
					return value >= 0;
				})
				.required('its required field'),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

	const onSubmitHandler = (data) => {
		data = {
			...data,
			photo: data.photo[0],
			city: 0,
			type_of_event: 0,
			email: 'bbb@b.com',
		};
		axios
			.post('http://127.0.0.1:8000/events/new_event/', data, {
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${window.localStorage.getItem(`token`)}`,
				},
			})
			.then((data) => {
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className={'event-form_registration'}>
			<form className={'event_form'} onSubmit={handleSubmit(onSubmitHandler)}>
				<div className={'form-block__row'}>
					<div>
						<label htmlFor='title'>
							<p className={'label'}>TITLE</p>
						</label>
						<input
							type='text'
							{...register('title')}
							className={'form_input'}
						/>
					</div>
					<div>
						<label htmlFor='address'>
							<p className={'label'}>ADDRESS</p>
						</label>
						<input
							type='text'
							{...register('address')}
							className={'form_input'}
						/>
					</div>
					<div>
						<label htmlFor='type_of_event'>
							<p className={'label'}>TYPE OF EVENT</p>
						</label>
						<SelectInput register={register} type={'typeOfEvent'} />
					</div>
				</div>
				<label
					className={'event-form_photo_label'}
					style={
						photo
							? {
									backgroundImage: `url(${photo.url})`,
									backgroundRepeat: 'no-repeat',
									backgroundPosition: 'center',
									backgroundSize: '100px',
									opacity: '1',
							  }
							: {}
					}
					key={'photo'}
				>
					<input
						className={'event-form_photo'}
						type='file'
						{...register('photo')}
					/>
				</label>
				<p>{errors.photo?.message}</p>
				<label htmlFor='description'>
					<p className={'label'}>DESCRIPTION</p>
				</label>
				<input
					className={'event-form_description'}
					type='text'
					autoComplete={'off'}
					{...register('describe')}
				/>
				<p>{errors.description?.message}</p>
				<div className={'form-block__row'}>
					<div>
						<label htmlFor='date'>
							<p className={'label'}>DATE</p>
						</label>
						<input
							className={'event-form_date form_input'}
							type='datetime-local'
							{...register('event_date')}
						/>
						<p>{errors.date?.message}</p>
					</div>
					<div>
						<label htmlFor='city'>
							<p className={'label'}>CITY</p>
						</label>
						<SelectInput register={register} type={'city'} />
					</div>
					<div>
						<label htmlFor='price'>
							<p className={'label'}>PRICE</p>
						</label>
						<input
							type='number'
							{...register('ticket_price')}
							className={'form_input'}
						/>
						<p>{errors.price?.message}</p>
					</div>
				</div>

				<input type={'submit'} className={'layout_button'} />
			</form>
		</div>
	);
};

export default EventForm;
