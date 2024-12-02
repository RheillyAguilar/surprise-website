

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function FirstMessage({ onClose }) {
    useEffect(() => {
        // Lock the scroll when the component is open
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleClose = () => {
        onClose(); // Notify the parent component to reset the state
    };

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10'>
            <div className="absolute text-white text-3xl top-[5%] right-[5%] cursor-pointer" onClick={handleClose}>
                <FontAwesomeIcon icon={faXmark} />
            </div>
            <div className='bg-[#f5ebe0] h-[80vh] text-black p-10 rounded-md max-w-2xl text-xl'>
                <h1 className='text-center font-bold mb-5'>Unang Aniversaryo</h1>
                <h1 className='text-justify'>
                    Isang taon ng pagmamahal, pagtutulungan, at mga alaala na bumuo sa ating kwento. Sa bawat araw na lumilipas, natutunan natin ang tunay na kahulugan ng pagkakaunawaan at suporta. Ang mga simpleng sandali, mula sa mga tawanan hanggang sa mga hamon, ay nagpatibay sa ating relasyon at nagpapaalala na bawat pagsubok ay nagiging mas madali kapag magkasama.
                    <br />
                    Ang bawat pagdaan ng oras ay nagbigay sa atin ng pagkakataon na mas makilala ang isa’t isa, at higit pang mahalin ang mga kahinaan at kalakasan ng bawat isa. Salamat sa mga pagkakataon na nagpatawa ka sa akin sa mga panahong kailangan ko ng saya, at sa mga pagkakataon na hinawakan mo ang aking kamay sa mga panahong puno ng pag-aalinlangan. Ang iyong presensya ay nagbibigay ng lakas at pag-asa na magpatuloy sa pagharap sa hinaharap.
                    <br />
                    Nawa'y magpatuloy ang ating paglalakbay na puno ng pag-asa at pagmamahalan. Ang unang taon ay simula lamang ng mas maraming taon na puno ng mga pangarap, tagumpay, at pagmamahalan na higit pang lalago. Kasama mo, handa akong harapin ang lahat ng hamon at pagtuklas na dala ng bawat araw.
                </h1>
            </div>
        </div>
    );
}
