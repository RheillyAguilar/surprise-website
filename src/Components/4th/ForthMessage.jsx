import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ForthMessage({ onClose }) {
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
            <div className='bg-[#f5ebe0] h-[80vh] w-full max-w-2xl text-black p-10 rounded-md text-xl overflow-y-auto' style={{
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none' // Internet Explorer
            }}>
                <style>
                    {`
                        .scrollable-content::-webkit-scrollbar {
                            display: none; /* Chrome, Safari */
                        }
                    `}
                </style>
                <h1 className='text-center font-bold'>Pangapat Aniversaryo</h1>
                <p className='text-lg text-center mb-5'>Take Note: This message was scrollable</p>
                <h1 className='text-justify'>
                    Apat na taon ng pagmamahal, pag-unawa, at pagbuo ng mga alaala na nagpatibay sa ating samahan. Sa bawat taon, mas lumalalim ang ating pagkakaunawaan at mas nagiging matatag ang ating pagkaka-bonding. Ang mga karanasang pinagsamahan natin, mula sa mga magagandang pagkakataon hanggang sa mga pagsubok, ay nagsilbing saksi sa lakas ng ating pagmamahalan at ang kakayahan natin na magtagumpay nang magkasama.
                    <br/>
                    Ngayon, sa ika-apat na taon ng ating paglalakbay, alam kong dumaan tayo sa mga hindi inaasahang hamon, kabilang na ang pagkawala ng iyong ama. Ang sakit na iyong dinaranas ay walang katumbas, ngunit nais kong malaman mo na hindi ka nag-iisa. Nandito ako upang maging kasama mo sa bawat hakbang—sa mga araw ng lungkot at pagdududa, at sa mga pagkakataong kailangan mo ng kausap at suporta. Ang pag-ibig at alaala na iniwan niya ay mananatili sa ating puso at magiging inspirasyon sa atin sa pagharap sa hinaharap.
                    <br/>
                    Sa bawat taon na lumilipas, natutunan natin ang tunay na kahulugan ng pag-ibig, at ito’y hindi lamang sa mga magagandang sandali kundi lalo na sa pagtulong sa isa’t isa sa oras ng pangungulila at pagdadalamhati. Salamat sa iyong lakas at sa pagtanggap sa mga hamon ng buhay na magkasama. Ang iyong tapang at pag-asa ay nagbibigay sa akin ng inspirasyon na harapin ang bawat araw nang buo at masaya.
                    <br/>
                    Sa pagdiriwang ng ating ika-apat na anibersaryo, nais kong ipadama sa iyo na ang ating pagmamahalan ay hindi nagbabago. Ang iyong ngiti, ang mga yakap na nagbibigay pag-asa, at ang mga pag-usap na nagbabalik sa atin sa mga simpleng kaligayahan ng buhay ay mga bagay na nagpapalakas sa ating samahan. Ang bawat araw na lumilipas ay nagbibigay sa atin ng pagkakataon na maging mas mabuting mga kasama, at mas pinapanday natin ang ating hinaharap.
                    <br/>
                    Nawa’y ang ika-apat na taon ay magsilbing paalaala na sa kabila ng mga pagsubok at lungkot, ang ating pagmamahal ay matibay at magpapatuloy. Kasama ka, ang bawat hakbang at pagdaan ng oras ay nagiging makabuluhan, at ang pag-ibig natin ay patuloy na lumalago sa paglipas ng panahon. Laban lang, at salamat sa pagbigay mo sa akin ng pagkakataong makasama ka sa bawat yugto ng iyong buhay.
                </h1>
            </div>
        </div>
    );
}
