import React, {useState, useEffect} from "react";
import Navbar from "../../main-comp/navbar";
import CardForm from "./cardForm";
import "./formApp.css"


export default function FormApp() {
    const [imgState, setImg] = useState()
    const [formPage, setFormPage] = useState(1)
    
    const fetchUserData = async () => {
        fetch("https://qrinfo.onrender.com/qrcode")
            .then((response) => response.text())
            .then((user) => {
                setImg(user)
            })
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    return (
        <div className="form--main">
            <Navbar/>
            <CardForm formPage={formPage} setFormPage={setFormPage}/>
            {/* <div className="def-form">
                <h1>Profile Card</h1>
                <p>When Scanned Users will be redirected to these details</p>
            </div> */}
            <br/>
            <br/>
            <br/>

            <div className="smthing">
                {/* {formPage} */}
                {formPage===5 && <img src={imgState}></img>}
            </div>
            <br />
            <br />
        </div>
    )
}
