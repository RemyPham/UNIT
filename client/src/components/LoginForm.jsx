import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Redirect } from "react-router-dom";

import apiHandler  from '../api/apiHandler'

const api = new apiHandler();

export default function LoginForm() {

    const [redirection, setRedirection] = useState(false)

    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        api
        .post("/signin", data)
        .then(() => setRedirection(true))
        .catch(err => console.log(err))
    }

    if (redirection) {
        return <Redirect to="/dashboard"/>
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <div className="container">
                    <label htmlFor="email">Email</label>
                    <input ref={register({required: true})} name="email" id="email" type="email"/>
                </div>
                    
                <div className="container">
                    <label htmlFor="password">Password</label>
                    <input ref={register({required: true, min: 6})} name="password" id="password" type="password"/>
                    <Link to={"#"} className="forgot">forgot your password ?</Link>
                </div>

                <button className="btn">Login</button>
            </form>
    )
}
