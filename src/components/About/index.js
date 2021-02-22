import React from 'react';
import myPic from "../../assets/images/myPic.jpeg";

const About = () => {
    return (
        <section>
            <h1>About me</h1>
            <img src={myPic} className="profilePic" style={{ width: "100%"}} alt="Profile Picture" />
            <br />
            <br />
            <p>
            Passionate about bringing web designs to life.
            </p>
            <br />
            <p>
            Experienced in HTML, CSS, Javascript, JQuery, MomentJS, Materialize CSS, and Bootstrap.      
            </p>
           
        </section>
    )
};

export default About;