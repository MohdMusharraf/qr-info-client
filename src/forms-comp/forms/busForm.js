import React from "react";
import "./allForms.css"


export default function BusForm({formValue, setFormValue}) {
    return (
        <div className="form-div">
                <h1>Business</h1>
                
                <form className="per--form">
                    <label>Company Name</label>
                        <input 
                            name="compName"
                            value={formValue.compName}
                            type="text" 
                            placeholder="Your company here"
                            onChange={setFormValue}
                        />
                    <label>Job Designation</label>
                        <input 
                            name="jobDes"
                            value={formValue.jobDes}
                            type="text" 
                            placeholder="Your job designation here"
                            onChange={setFormValue}
                        />
                    <label>Address</label>
                        <input 
                            name="address"
                            value={formValue.address}
                            type="text" 
                            placeholder="Your address here"
                            onChange={setFormValue}
                        />
                    <label>Website</label>
                        <input 
                            name="website"
                            value={formValue.website}
                            type="text" 
                            placeholder="Paste link here"
                            onChange={setFormValue}
                        />
                </form>
        </div>
    )
}