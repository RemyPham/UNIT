import React from 'react'


export default function RegisterForm() {
    return (
        <form className="form">
            <div className="container">
                <label>Username</label>
                <input type="text"/>
            </div>

            <div className="container">
                <label>Email</label>
                <input type="email"/>
            </div>
                    
            <div className="container">
                <label>Password</label>
                <input type="password"/>
            </div>

            <button className="btn">Register</button>
        </form>
    )
}
