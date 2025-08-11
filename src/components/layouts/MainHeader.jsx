import { Toggle } from '../../mainapp/ux/Toggle'
import sound from "../../assets/volume.png";
import off from "../../assets/volume-slash.png";
import exit from "../../assets/exit.png";
import BgSound from "../../assets/BgSound.mp3";
import './MainHeader.css'
import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom'
export const MainHeader = () => {
    const [isOn, setIsOn] = useState(true);
    const handleSound = () => {
        setIsOn(prev => {
            const newIsOn = !prev;
            if (newIsOn) {
                audioRef.current.play().catch((err) => {
                    console.log("Playback failed:", err);
                });
            } else {
                audioRef.current.pause();
            }
            return newIsOn;
        });
    };

    const audioRef = useRef(new Audio(BgSound));

    useEffect(() => {
        audioRef.current.loop = true;
        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        };
    }, []);


    return (
        <header>
            <nav className="mainheader-container">
                <NavLink className='function-button' id="exit" to='/'>
                    <img src={exit} alt="" className='nav-icon' />
                </NavLink>
                <div className='header-heading'>
                    <h1>PIPPO-YOUR BUDDY</h1>
                </div>
                <div className="function-header">
                    < Toggle />
                    <button className="function-button" id="sound" onClick={handleSound}>
                        <img src={isOn ? sound : off}
                            alt="Sound toggle"
                            className={`sound-image ${isOn ? 'on' : 'off'} nav-icon`} />
                    </button>
                </div>
            </nav>
        </header>
    )
}