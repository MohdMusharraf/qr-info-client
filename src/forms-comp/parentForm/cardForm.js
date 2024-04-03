import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import BusForm from "../forms/busForm";
import NoteForm from "../forms/noteForm";
import PerForm from "../forms/perForm";
import SocForm from "../forms/socForm"
import "./cardForm.css"
import StepComp from "./stepComp";
import mutliStepProgressArray from "../data/mutliStepProgressArray.js"
import formDataset from "../data/formDataset"
import { motion } from "framer-motion"

export default function CardForm() {
    const targetRef = useRef(null);
    const [formPage, setFormPage] = useState(1)
    const [formData, setFormData] = useState(formDataset)
    const [isTick, setIsTick] = useState(mutliStepProgressArray)
    const [imgState, setImg] = useState()
    
    const fetchUserData = async () => {
        try {
            const response = await axios.get("https://qrinfo.onrender.com/qrcode");
            setImg(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }
    
    useEffect(() => {
        if (formPage === 5 && targetRef.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [formPage]);

    useEffect(() => {
        fetchUserData();
    }, [])
        
    function handleChange(event) {
        const {name, value} = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const postData = async () => {
        try {
            const { fullName, email, contact, age, compName, jobDes, address, website, twitter, linkedin, github, instagram, facebook, title, note } = formData;
            const response = await axios.post('/users', {
                fullName,
                email,
                contact,
                age,
                compName,
                jobDes,
                address,
                website,
                twitter,
                linkedin,
                github,
                instagram,
                facebook,
                title,
                note
            });
            if (response.status === 200) {
                window.alert("Registration Successful");
                console.log("Registration Successful");
            } else {
                window.alert("Invalid Registration");
                console.log("Invalid Registration");
            }
            setFormData({
                fullName: "",
                email: "",
                contact: "",
                age: "",
                compName: "",
                jobDes: "",
                address: "",
                website: "",
                twitter: "",
                linkedin: "",
                github: "",
                instagram: "",
                facebook: "",
                title: "",
                note: ""
            });
        } catch (error) {
            console.error("Error posting data:", error);
            window.alert("Error submitting data. Please try again.");
        }
    };

    function addFormPage() {
        if(formPage <= 4){
            setFormPage(prevPage => prevPage + 1)
        }
        setIsTick( prevState => {
            return prevState.map((step) => {
                return step.id === formPage ? {...step, on: true} : step
            })
        })
    }

    function minFormPage() {
        if(formPage > 1){
            setFormPage(prevPage => prevPage - 1)
        }     
        setIsTick( prevState => {
            return prevState.map((step) => {
                return step.id === formPage-1 ? {...step, on: false} : step
            })
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        postData();
        addFormPage();
    }

    
    const steps = isTick.map( step => (
        <StepComp
            setName={step.name}
            id={step.id}
            key={step.id}
            ticked={step.on}
        />
    ))

    return(
        <div>
        <motion.div 
            className="contain--two"
            initial={{scale: 0.75, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            transition={{ ease: "easeOut", duration: 1 }}
        >
            <div 
                className="left--div"
                >
                {steps}
            </div>
            <div className="right--div">
                {formPage === 1 && <PerForm formValue={formData} setFormValue={handleChange}/>}
                {formPage === 2 && <BusForm formValue={formData} setFormValue={handleChange}/>}
                {formPage === 3 && <SocForm formValue={formData} setFormValue={handleChange}/>}
                {formPage >= 4 && <NoteForm formValue={formData} setFormValue={handleChange}/>}
            </div>
            <div className="btn--div">
                <button className="next-btn" onClick={minFormPage}>Back</button>
                {formPage <= 3 && <button className="next-btn" onClick={addFormPage}>Next</button>}
                {formPage >= 4 && <button type="submit" className="next-btn" onClick={onSubmit}>Submit</button> }
            </div>
        </motion.div>
        <br/>
        {formPage===5 && <div className="qrCodeDiv"  ref={targetRef}>
            <div className="qrCodeImg">
                <img src={imgState}></img>
            </div>
            <div className="qrCodeText">
                <h1>Scan this QR Code</h1>
                <p>Redirects to the information input above</p>
            </div>
        </div>}
        <br/>
        </div>
    )
}
