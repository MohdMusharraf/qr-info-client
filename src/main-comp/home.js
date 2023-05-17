import React from "react";
import Content from "./content";
import Navbar from "./navbar";
import "./home.css";

export default function Home() {
    return(
        <>
        <div className="Home-App">
            <header className="Home-App-header">
                <Navbar />
                <Content />
            </header>
        </div>
        </>
    )
}