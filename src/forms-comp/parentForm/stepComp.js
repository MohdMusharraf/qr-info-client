import React from "react"
import logo from "../../images/progress.png"
import tick from "../../images/tick.png"

export default function StepComp(props) {
    const imgSrc = props.ticked ? tick : logo

    return (
        <div 
            className="progress--div"
        >
            <img src={imgSrc} />
            <p>Step {props.id}
                <br/>
                <span className="step-desc">
                    {props.setName}
                </span>
            </p>
        </div>
    )
}