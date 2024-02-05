import React from "react";
import { Link } from "react-router-dom";
import "./HeroSection.css";
import videobg from './wallpaper.mp4';

function ButtonLink({to, children}){
    return <Link to={to}><button>{children}</button></Link>;
}

function HeroSection(){
    return(
        <div className="hero-section">
            <video src={videobg} autoPlay loop muted/>
            <div className="content">
                <h1 className="text">Welcome to the Eleventh Hour</h1>
                <h2  className="text">A world ran by Sean</h2>
                <div className="btns text">
                    <ButtonLink to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Find out more about me!</ButtonLink>
                </div>
            </div>
        </div>
    )
}

export default HeroSection