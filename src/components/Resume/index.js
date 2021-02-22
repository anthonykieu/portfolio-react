import React from 'react';
import resume from "../../assets/images/resume.png";
const Resume = () => {

    return (
        <section>
            <h1>
                Resume
            </h1>
            <img src={resume} className="resumePic" style={{ width: "100%"}} alt="Resume Picture" />
        </section>
    )
}

export default Resume;