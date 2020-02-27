import React from 'react'
import { Link } from "react-router-dom";

export default function LoginForm() {
    return (
        <form className="form">
                <div className="container">
                    <label>Email</label>
                    <input type="email"/>
                </div>
                    
                <div className="container">
                    <label>Password</label>
                    <input type="password"/>
                    <Link className="forgot">forgot your password ?</Link>
                </div>

                <button className="btn">Login</button>
            </form>
    )
}
