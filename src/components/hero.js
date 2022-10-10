import React from "react"
import "./hero.css"

const Hero = ({ imageSrc }) => {
    return (
        <div className="hero_div">
            <img src={imageSrc} alt="travleimage" className="hero_image"/>
            <h1 className="hero_title">Travel Made Simple</h1>
        </div>
    )
}

export default Hero;