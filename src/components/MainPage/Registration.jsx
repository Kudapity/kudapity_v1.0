import React from 'react';
import {useForm} from "react-hook-form";
import "../../styles/styleRegistration.css"
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";


const schema = yup.object({
    first_name: yup.string().max(16)
        .test('isNumber', 'Name should not contain numbers', (element) => {
            for (const elementElement of element) {
                if (!isNaN(elementElement)) {
                    return false
                }
            }
            return true
        })
        .required(),
    last_name: yup.string().max(15).required(),
    email: yup.string().email().required(),
    password: yup.string().max(16).required()
}).required()


const Registration = () => {
    const {register, handleSubmit, watch, formState: {errors}, control} = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    });
    const onSubmit = (data, e) => {
        console.log(data)
        axios.post('http://127.0.0.1:8000/auth/users/', data,{
        headers:{'Content-Type': 'application/json'}
        })
            .then(data => {
                alert(JSON.stringify(data));
                e.target.reset()
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div className={'registration_container'}>
            <span className={'item_span_registration'}>Зареєструйтесь</span>
            <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={'First name'} {...register('first_name')} autoComplete='off'/>
                <p>{errors.name?.message}</p>
                <input type="text" placeholder={'Second name'} {...register('last_name')} autoComplete='off'/>
                <p>{errors.surname?.message}</p>
                <input type="text" placeholder={'Email'} {...register('email')} autoComplete='off'/>
                <p>{errors.email?.message}</p>
                <input type="password" placeholder={'Password'}{...register('password')} autoComplete='off'/>
                <p>{errors.password?.message}</p>
                <input type="submit" className={'layout_button'} value={'Підтвердити'}/>
            </form>
        </div>
    );
};

export default Registration;