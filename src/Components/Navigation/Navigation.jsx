

import { useAudio } from "../Navigation/AudioContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navigation() {
    const { isPlay, setIsPlay } = useAudio();
    const [sticky, setSticky] = useState(false);


     // sticky the navigation 
     const stickyNavbar = () => {
        if (window.scrollY >= 80) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }


    window.addEventListener('scroll', stickyNavbar)



    return (
        <header className={sticky ? 'sticky nav' : 'flex items-center justify-between px-32 py-5 text-[#003049]'}>
            <div className="text-5xl font-bold">
                <h1>Ai.</h1>
            </div>
            <div className="flex gap-10 items-center text-3xl">
                <Link to="/">Home</Link>
                <Link to="/first">1st</Link>
                <Link to="/second">2nd</Link>
                <Link to="/third">3rd</Link>
                <Link to='/forth'>4th</Link>
                <Link to='/envelope'>Envelope</Link>
            </div>
            <div>
                <button
                    onClick={() => setIsPlay((prev) => !prev)}
                    aria-pressed={isPlay}
                    aria-label={isPlay ? "Pause audio" : "Play audio"}
                    className="flex items-center mx-auto justify-center gap-3 bg-[#669bbc] hover:bg-[#567da4] w-32 py-2 rounded-md mt-5 outline-none text-white "
                >
                    <FontAwesomeIcon
                        icon={isPlay ? faPause : faPlay}
                        className="text-xl bg-transparent"
                    />
                    <span className="bg-transparent">{isPlay ? "Stop" : "Play"}</span>
                </button>
            </div>
        </header>
    );
}
