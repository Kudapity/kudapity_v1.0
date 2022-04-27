import React from 'react';
import {useForm} from "react-hook-form";
import "../../styles/styleRegistration.css"
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from "axios";


const schema = yup.object({
    name: yup.string().max(16)
        .test('isNumber', 'Name should not contain numbers', (element) => {
            for (const elementElement of element) {
                if (!isNaN(elementElement)) {
                    return false
                }
            }
            return true
        })
        .required(),
    email: yup.string().email().required(),
    password: yup.string().max(16).required(),
    surname: yup.string().max(15).required()

}).required()


const Registration = () => {
    const {register, handleSubmit, watch, formState: {errors}, control} = useForm({
        resolver: yupResolver(schema),
        mode: "onBlur"
    });
    const onSubmit = (data, e) => {
        axios.post('https://jsonplaceholder.typicode.com/users', JSON.stringify(data))
            .then(data => {
                alert(JSON.stringify(data.data));
                e.target.reset()
            })
    }


    return (
        <div className={'registration_container'}>
            <span className={'item_span_registration'}>Зареєструйтесь</span>
            <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={'First name'} {...register('name', {required: true, minLength: 2})}/>
                <p>{errors.name?.message}</p>
                <input type="text" placeholder={'Second name'} {...register('surname')}/>
                <p>{errors.surname?.message}</p>
                <input type="text" placeholder={'Email'} {...register('email')}/>
                <p>{errors.email?.message}</p>
                <input type="password" placeholder={'Password'}{...register('password')}/>
                <p>{errors.password?.message}</p>
                <input type="submit" className={'layout_button'} value={'Підтвердити'} />
            </form>
        </div>
    );
};

export default Registration;