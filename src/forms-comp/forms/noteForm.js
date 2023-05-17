import React from "react";
import "./allForms.css"

export default function NoteForm({formValue, setFormValue}) {
    return (
        <div className="form-div">
                <h1>Notes</h1>
                
                <form className="per--form">
                    <label>Title</label>
                        <input 
                            name="title"
                            value={formValue.title}
                            type="text" 
                            placeholder="Add a title"
                            onChange={setFormValue}
                        />
                    <label>Note</label>
                        <textarea 
                            name="note"
                            value={formValue.note}
                            placeholder="Add Information"
                            onChange={setFormValue}
                        />
                   
                </form>
        </div>
    )
}