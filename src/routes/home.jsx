import React from 'react';
import Lottie from 'lottie-react';
import techAnimation from "../assets/techAnimation.json"
import { Link } from 'react-router-dom';
function Home() {
    return (
        <>
        <div className="home-container">
        <div className="home-intro">
            <div className="intro-text">
            <h1>Bamidele Ogunseye</h1>
            <h2>Fullstack Web Developer.</h2> 
            </div>
            <Lottie className = "lottie-animation"
            animationData={techAnimation}
            loop={true}/>
            
        </div>
        <div className="dabuttons">
            <Link to = "/about">
            <button>About</button>
                </Link>
            <Link to ="/projects">
            <button>Projects</button>
            </Link>
            <Link to ="/contact">
            <button>Contact</button>
            </Link>

        </div>
        </div>
        </>
    );
}

export default Home;