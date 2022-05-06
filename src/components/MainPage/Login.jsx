import React from 'react';
import {useForm} from "react-hook-form";
import "../../styles/styleRegistration.css"
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";


const schema = yup.object({
    email: yup.string().required(),
    password: yup.string().max(16).required(),
}).required()


const Login = () => {
    const {register, handleSubmit, watch, formState: {errors}, control} = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    });
    const onSubmit = (data, e) => {
        axios.post('http://127.0.0.1:8000/auth/token/login', data, {
            headers:{'Content-Type': 'application/json'}
        })
            .then(data => {
                alert(JSON.stringify(data.data));
                e.target.reset()
            }).catch(err=>{
                alert('unsuccessful')
        })
    }


    return (
        <div className={'registration_container'}>
            <span className={'item_span_registration'}>Увійдіть</span>
            <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder={'Email'} {...register('email')} autoComplete='off'/>
                <p>{errors.name?.message}</p>
                <input type="password" placeholder={'Password'}{...register('password')} autoComplete='off'/>
                <p>{errors.password?.message}</p>
                <input type="submit" className={'layout_button'} value={'Підтвердити'} />
            </form>
        </div>
    );
};

export default Login;