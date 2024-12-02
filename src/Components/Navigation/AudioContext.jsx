

import { createContext, useState, useRef, useEffect, useContext } from "react";
import palagi from "../../assets/palagi.mp3";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
    const [isPlay, setIsPlay] = useState(false);
    const audioRef = useRef(new Audio(palagi));

    useEffect(() => {
        const audio = audioRef.current;

        const handleAudioEnd = () => setIsPlay(false);
        audio.addEventListener("ended", handleAudioEnd);

        if (isPlay) {
            audio.play();
        } else {
            audio.pause();
        }

        return () => {
            audio.removeEventListener("ended", handleAudioEnd);
        };
    }, [isPlay]);

    return (
        <AudioContext.Provider value={{ isPlay, setIsPlay }}>
            {children}
        </AudioContext.Provider>
    );
};

export const useAudio = () => useContext(AudioContext);
