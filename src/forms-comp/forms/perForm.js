import React, { useState } from "react";
import "./allForms.css"

export default function PerForm({formValue, setFormValue}) {
    return (
        <div className="form-div">
                <h1>Personal Information</h1>
                
                <form className="per--form">
                    <label>Full Name</label>
                        <input 
                            name="fullName"
                            value={formValue.fullName}
                            type="text" 
                            placeholder="Enter you name"
                            onChange={setFormValue}
                        />
                    <label>Email</label>
                        <input 
                            name="email"
                            value={formValue.email}
                            type="email" 
                            placeholder="example@email.com"
                            onChange={setFormValue}
                        />
                    <label>Contact</label>
                        <input 
                            name="contact"
                            value={formValue.contact}
                            type="text" 
                            placeholder="123-456-7890"
                            onChange={setFormValue}
                        />
                    <label>Age</label>
                        <input 
                            name="age"
                            value={formValue.age}
                            type="number" 
                            placeholder="Enter Age"
                            onChange={setFormValue}
                        />
                </form>
        </div>
    )
}