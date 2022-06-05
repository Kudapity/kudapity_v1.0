import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/styleEventForm.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import SelectInput from './SelectInput';
import axios from 'axios';

const EventForm = () => {
	const message = 'You successfully created event';
	const [isPosted, setIsPosted] = useState(false);

	const schema = yup
		.object({
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

	const onSubmitHandler = (data, e) => {
		data = {
			...data,
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
				e.target.reset();
				setIsPosted(true);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className={'event-form_registration'}>
			<form
				className={'event_form'}
				onSubmit={handleSubmit(onSubmitHandler)}
				onFocus={() => {
					setIsPosted(false);
				}}
			>
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
				<label htmlFor='description'>
					<p className={'label'}>DESCRIPTION</p>
				</label>
				<input
					className={'event-form_description'}
					type='text'
					autoComplete={'off'}
					{...register('describe')}
				/>
				<p>{errors.describe?.message}</p>
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
						<p>{errors.event_date?.message}</p>
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
						<p>{errors.ticket_price?.message}</p>
					</div>
				</div>
				<input type={'submit'} className={'layout_button'} value={'SUBMIT'} />
			</form>
			<div className={'event-form_posted'}>
				<p>{isPosted && message}</p>
			</div>
		</div>
	);
};

export default EventForm;
