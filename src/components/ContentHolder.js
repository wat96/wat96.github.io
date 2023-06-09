import { React, useState } from 'react';
import "../styles/ContentHolder.css"

function ContentHolder() {


    return (
        <div className="content-holder">
            <div className="content-header y1-code-text">About Me</div>
            <div className='content-body b2-code-text'>I'm a software engineer 👨🏻‍💻‍ and musician 🎹 based in LA.
            I studied computer science at MIT and I've gotten to live/work in the Bay Area, Seattle, and LA.<br/>
            If you want to take a closer look, here's my <a href="/resume.pdf">resume</a>.</div>
            <br/>
            <br/>

            <div className="content-header y1-code-text">What am I working on?</div>
            <div className='content-body b2-code-text'>Right now I am working on some web3 security related side projects,
            <br/> I am working to combine symbolic programming and visualizations to catch security vulnerabilites faster.
            <br/><br/>Also working on recording more music and eventually putting my soundcloud links here. 
            <br/>Always looking for new and interesting projects to hop onto, so don't be shy to reach out (see links below).

            </div>
        </div>
    );
}

export default ContentHolder;
