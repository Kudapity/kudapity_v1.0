import React from 'react';
import {useForm} from "react-hook-form";
import "../../style.css"

const Registration = () => {
    const {register, handleSubmit, watch, formState: {errors}, control} = useForm();
    const onSubmit = (data) => alert(JSON.stringify(data));

    // function nameValidation(value = '') {
    //     for (const valueElement of value.split('')) {
    //         if (!isNaN(valueElement)) {
    //             return 'Name should not include numbers'
    //         }
    //     }
    //     return 'its end'
    // }

    return (
        <div>
            <form className={'form'} onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={'First name'} {...register('name', {required: true, minLength:2})}/>
                <input type="text" placeholder={'Second name'} {...register('surname')}/>
                <input type="text" placeholder={'Email'} {...register('email')}/>
                <input type="password" placeholder={'Password'}{...register('password')}/>
                <input type="submit"/>
            </form>
        </div>
    );
};

export default Registration;