import React from 'react'
import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'


export const About = () => {

    const playVideo=()=>{
        
    }
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about} alt="" className='about-img'/>
                <img src={play} alt="" className='play-icon' onClick={playVideo}/>
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tommorow's Leader's Today</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque commodi odit nihil facilis, ab a iure unde pariatur corporis vitae, soluta minus fuga alias est blanditiis tempore nam? Ut, officiis!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus aspernatur recusandae magnam facere dolor a, itaque cumque nam blanditiis ab mollitia corrupti laborum nesciunt maxime? Beatae dolores repellat nobis laborum.</p>
            </div>
        </div>
    )
}
