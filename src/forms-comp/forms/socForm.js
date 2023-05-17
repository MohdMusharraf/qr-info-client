import React from "react";
import "./allForms.css"

export default function SocForm({formValue, setFormValue}) {
    return (
        <div className="form-div">
                <h1>Socials</h1>
                
                <form className="per--form">
                    <label>Twitter</label>
                        <input 
                            name="twitter"
                            value={formValue.twitter}
                            type="text" 
                            placeholder="Paste link here"
                            onChange={setFormValue}
                        />
                    <label>LinkedIn</label>
                        <input 
                            name="linkedin"
                            value={formValue.linkedin}
                            type="text" 
                            placeholder="Paste link here"
                            onChange={setFormValue}
                        />
                    <label>Github</label>
                        <input 
                            name="github"
                            value={formValue.github}
                            type="text" 
                            placeholder="Paste link here"
                            onChange={setFormValue}
                        />
                    <label>Instagram</label>
                        <input 
                            name="instagram"
                            value={formValue.instagram}
                            type="text" 
                            placeholder="Paste link here"
                            onChange={setFormValue}
                        />
                    <label>Facebook</label>
                        <input 
                            name="facebook"
                            value={formValue.facebook}
                            type="text" 
                            placeholder="Paste link here"
                            onChange={setFormValue}
                        />
                </form>
        </div>
    )
}