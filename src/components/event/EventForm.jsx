import React from 'react';
import { useForm } from 'react-hook-form';
import '../../styles/styleEventForm.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { mixed } from 'yup';

const EventForm = () => {
	const schema = yup
		.object({
			photo: mixed()
				.test('isValuatedType', 'FIle should be .png .jpeg', (element) => {
					const file_type = element[0].type || '';
					return (
						(element && file_type === 'image/jpeg') || file_type === 'image/png'
					);
				})
				.test('File is to large', 'File is bigger than 2mb', (value) => {
					return value && value[0].size <= 2000000;
				})
				.required('File is required'),
			description: yup.string().max(120).min(2).required(),
			date: yup.date().test('time', 'it should be in the future', (value) => {
				return new Date() < value;
			}),
		})
		.required();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onChange', resolver: yupResolver(schema) });

	const onSubmitHandler = (data) => {
		alert(JSON.stringify(data));
	};
	return (
		<div>
			<form
				action=''
				className={'event_form'}
				onSubmit={handleSubmit(onSubmitHandler)}
			>
				<label className={'event-form_photo_label'}>
					<input
						className={'event-form_photo'}
						type='file'
						{...register('photo')}
					/>
				</label>
				<p>{errors.photo?.message}</p>
				<input
					className={'event-form_description'}
					type='text'
					{...register('description')}
				/>
				<p>{errors.description?.message}</p>
				<input
					className={'event-form_date'}
					type='date'
					{...register('date')}
				/>
				<p>{errors.date?.message}</p>
				<input type={'submit'} />
			</form>
		</div>
	);
};

export default EventForm;
