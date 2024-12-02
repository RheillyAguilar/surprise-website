

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ThirdMessage({ onClose }) {
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
                <h1 className='text-center font-bold mb-5'>Pangatlo Aniversaryo</h1>
                <h1 className='text-justify'>
                    Tatlong taon ng walang sawang pagmamahal, pag-aalaga, at pagbuo ng mas maraming alaala na nagpapalalim sa ating samahan. Sa bawat taon, mas lumalalim ang ating pag-unawa sa isa’t isa at mas nagiging matatag ang ating pagkaka-bonding. Ang mga karanasang pinagsamahan natin, mula sa mga magagandang pagkakataon hanggang sa mga pagsubok, ay nagsilbing saksi sa lakas ng ating pagmamahalan at ang kakayahan natin na magtagumpay nang magkasama.
                    <br/>
                    Ang ikatlong taon na ito ay puno ng mga aral na nagpapaalala sa atin na ang tunay na pag-ibig ay hindi lamang tungkol sa mga magagandang sandali kundi pati na rin sa pagtanggap at pagtulong sa isa’t isa sa mga hamon. Salamat sa pagpatuloy ng iyong pag-ibig, sa mga pagyakap na nagbigay ginhawa sa akin, at sa pagnanais na maging mas mabuting kasama araw-araw. Ang iyong presensya ay nagbibigay ng kaligayahan at lakas na walang katulad.
                    <br/>
                    Nawa’y ang ikatlong taon ay magsilbing inspirasyon sa mas maraming taon ng pagtutulungan, pag-unawa, at pagmamahal. Ang paglalakbay na ito ay patuloy na pinapalakas ng ating mga pangarap at pag-asa para sa hinaharap. Kasama ka, ang bawat araw ay nagiging espesyal, at ang pag-ibig natin ay patuloy na naglalago sa paglipas ng panahon.
                </h1>
            </div>
        </div>
    );
}
