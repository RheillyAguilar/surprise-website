

import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function SecondMessage({ onClose }) {
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
                <h1 className='text-center font-bold mb-5'>Pangalawang Aniversaryo</h1>
                <h1 className='text-justify'>
                    Dalawang taon na puno ng pagmamahal at pagkatuto, kung saan ang bawat araw ay nagbigay daan sa mas matibay na samahan. Sa paglalakbay na ito, mas lalo nating naunawaan ang kahalagahan ng pag-aalaga sa isa’t isa at ang tunay na diwa ng pagtutulungan. Ang mga simpleng sandali na puno ng saya, pati na rin ang mga pagkakataong nagbigay hamon sa atin, ay nagpatibay sa ating pagkakaunawaan at nagbigay ng lakas sa ating ugnayan.
                    <br/>
                    Ang bawat taon ay nagdadala ng bagong karanasan na nagiging bahagi ng ating kuwento. Ang mga pagsubok na ating nalampasan at ang mga tagumpay na ating ipinalasakit ay nagsilbing paalaala na ang pagmamahal at pagtitiwala ang nagbibigay buhay sa ating relasyon. Salamat sa bawat patak ng pag-ibig at sa mga alaala na nagsilbing inspirasyon sa ating paglalakbay.
                    <br/>
                    Nawa'y ang bawat taon na dumaan ay magbigay-daan sa mas maraming taon ng pagkakaroon ng tunay na pag-ibig, suporta, at pag-unawa. Ang ikalawang anibersaryo ay simula pa lamang ng mas makabuluhang kabanata na puno ng pag-asa at pangarap na sama-samang tinatahak.
                </h1>
            </div>
        </div>
    );
}
