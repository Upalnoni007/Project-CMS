
import React, { useState } from 'react'
import axios from 'axios'
import "./css/Signup.css"
import "./css/Button-85.css"
export default function Signup() {


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cpassword: '',
        examroll: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    let submit = async (e) => {
        e.preventDefault()

        try {

            alert("register succesfully")
            const res = await axios.post("http://localHost:8000/reg", {
                "data": formData
            })
            console.log(res.data)

        }
        catch {
            console.log(e);
        }
    }





    return (
        <div className='signup-container'>
            <div className='signup-form'>
                <form onSubmit={submit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="cpassword"
                        name="cpassword"
                        placeholder="Confirm password"
                        value={formData.cpassword}
                        onChange={handleChange}
                    />
                    <input
                        type="examroll"
                        name="examroll"
                        placeholder="Exam-roll"
                        value={formData.examroll}
                        onChange={handleChange}
                    />
                    {/* Add more input fields as needed */}
                    <div className='from-btn'>
                        <button className='button-85' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
