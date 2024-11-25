import React from "react";
import Lottie from "lottie-react";
import hiTech from "../assets/hitech.json"
import "./about.css"
import { TiHtml5 } from "react-icons/ti";
import { PiFileCssBold } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiDjango, SiMongodb, SiPostgresql } from "react-icons/si";
import { FaWordpress } from "react-icons/fa6";


function About() {
    return (
        <>
        <div className="about-container">
        <div>
            <div className="about-content">
                <div className="about-text">
            <h1>About Me</h1>
            <p>I am a enthuasiastic web developer with a passion for making fun and interactive web applications.  Even though I can work with both front-end and back-end frameworks, I specialize working on Front End with ReactJS an NextJS. I have a just over a year of experience and I am very excited to use this platform to showcase the projects that I have made in an effort to better myself at my profession.   </p>
            </div>
            <Lottie className="lottie-animation2" animationData={hiTech}
             loop={true}/>
                
            </div>
            <div className="proficiencies-container">
                <h1>Proficiencies</h1>
                <ul>
                    <li>HTML5 <TiHtml5 className="rIcon"/></li>
                    <li>CSS3 <PiFileCssBold className="rIcon"/> </li>
                    <li>JavaScript <IoLogoJavascript className="rIcon"/></li> 
                    <li>Python <FaPython className="rIcon"/></li>
                    <li>React <FaReact className="rIcon"/></li>
                    <li>Next <SiNextdotjs className="rIcon"/></li> 
                    <li>WordPress <FaWordpress className="rIcon"/></li>
                    <li>Node.js <FaNodeJs className="rIcon"/></li>
                    <li>Django <SiDjango className="rIcon"/></li>
                    <li>MongoDB <SiMongodb className="rIcon"/></li>
                    <li>PostgreSQL <SiPostgresql className="rIcon"/></li>
                </ul>
            </div>
        </div>
        </div>
        </>
    );
}

export default About;