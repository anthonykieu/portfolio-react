import React from 'react';
import myPic from "../../assets/images/myPic.jpeg";

const About = () => {
    return (
        <section>
            <h1>About me</h1>
            <img src={myPic} className="profilePic" style={{ width: "100%"}} alt="Profile Photo" />
            <p>lorem ipsum
            </p>
           
        </section>
    )
};

export default About;