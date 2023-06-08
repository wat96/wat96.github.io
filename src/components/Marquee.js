import { React, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Button } from '@mui/material';
import FadeIn from 'react-fade-in';
import "../styles/Marquee.css"

const CURSOR_CLASS_NAME = 'custom-type-animation-cursor';

function Marquee() {
    let [ animStates, setAnimStates ] = useState({
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false
    })

    let markAnimDone = (anim, el) => {
        let newAnim = {...animStates}
        newAnim[anim] = true
        setAnimStates(newAnim)
        if (el) el.classList.remove(CURSOR_CLASS_NAME);
    }

    return (
        <>
            <TypeAnimation
            sequence={[
                'Welcome 👋', // Types 'One'
                500, // Waits 1s
                (el) => { markAnimDone('first', el) }
            ]}
            className={`typingAnimation top-header ${CURSOR_CLASS_NAME}`}
            wrapper="span"
            cursor={false}
            />
            { animStates.first && <TypeAnimation
            sequence={[
                'I\'m Reymundo', // Types 'One'
                500, // Waits 1s
                (el) => { markAnimDone('second', el) }
            ]}
            className={`typingAnimation y1-code-text name-header ${CURSOR_CLASS_NAME}`}
            cursor={false}
            wrapper="span"
            /> }
            { !animStates.fourth && animStates.second && <TypeAnimation
            sequence={[
                'and I love ', // Types 'One'
                0, // Waits 1s
                (el) => { markAnimDone('third', el) }
            ] }
            className={`typingAnimation b1-code-text activity-header ${CURSOR_CLASS_NAME}`}
            wrapper="span"
            cursor={false}
            /> }
            { !animStates.fourth && animStates.third && <TypeAnimation
            sequence={[
                'listening to and making music 🎹',
                300, 
                'programming 💻',
                400,  
                'good coffee ☕',
                150, 
                'cats 🐈',
                150,
                'dogs 🐕',
                150, 
                'pizza 🍕',
                150, 
                'traveling 🧳',
                150, 
                '...my friends 🎉 🫶',
                1000, 
                (el) => { markAnimDone('fourth', el) }
            ] }
            className={`typingAnimation r1-code-text activity-header ${CURSOR_CLASS_NAME}`}
            wrapper="span"
            cursor={false}
            omitDeletionAnimation={true}
            /> }
            { animStates.fourth && <TypeAnimation
            sequence={[
                'Anywho,', // Types 'One'
                1000, // Waits 1s
                'Anywho, happy to have you here! 🤗', // Types 'One'
                (el) => { markAnimDone('fifth', el) }
            ]}
            className={`typingAnimation b1-code-text name-header ${CURSOR_CLASS_NAME}`}
            cursor={false}
            wrapper="span"
            /> }

            { animStates.fifth && <FadeIn 
                childClassName="header-btn"
                className="header-btn-holder">
                <Button className="header-btn b1-code-text" variant="text">
                Work
                </Button>
                <Button className="header-btn b1-code-text" variant="text">
                Play
                </Button>
            </FadeIn> }
        </>
    );
}

export default Marquee;
