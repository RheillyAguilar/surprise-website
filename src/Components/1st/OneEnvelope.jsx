


import { useState } from 'react';

export default function OneEnvelope() {
    const [isFlapped, setIsFlapped] = useState(false);

    const handleEnvelopeClick = () => {
        setIsFlapped(!isFlapped);
    };

    return (
        <section className="flex flex-col justify-center items-center">
            <p className='absolute top-[250%] font-bold text-xl max-w-xl text-center'>Take Note: To improve the reading experience, you can press the play button in the navigation, and the content inside the envelope is scrollable.</p>
            <div className="container">
                <div
                    className={`envelope-wrapper ${isFlapped ? 'flap' : ''}`}
                    onClick={handleEnvelopeClick}
                >                    <div className="envelope">
                        <div className="letter">
                            <div className="text">
                                <strong>Dear Mahal</strong>
                                <p>
                                    Sabi nila, if you find the greatest love, it's a sign that you found an unconditional love. So ito pala ibig nilang sabihin, naramdaman ko na siya. Kasi naniniwala ako na ikaw ang aking greatest love, kasi sa'yo ko naranasan ang pagmamahal na walang kapantay. Minsan, iniisip ko kung paano ko nahanap ang isang tulad mo—isang tao na handang magbigay ng lahat ng pagmamahal at pag-unawa. Hindi lang sa magagandang panahon, kundi pati na rin sa mga pagsubok, ikaw ay nariyan para sa akin, at ang bawat hakbang na isinusuong natin ay mas nagiging magaan dahil sa iyong suporta. Ang bawat tawa, ang bawat luha, at ang bawat pagmumuni-muni na magkasama, ay may halaga at ibig sabihin, dahil ito ay kasama kita.

                                    Ang pagiging greatest love mo sa buhay ko ay hindi lang dahil sa mga masasayang alaala, kundi dahil sa bawat sakripisyo at malasakit na ipinapakita mo araw-araw. Natutunan kong magtiwala at magpatawad, natutunan kong tanggapin ang aking mga kahinaan at pagkakamali dahil sa iyo. Sa bawat pangarap na binuo natin, sa bawat laban na pinaglaban natin, ramdam ko ang lakas at tibay ng ating pagmamahal. Kung walang ikaw, wala akong magagandang bagay na natutunan, wala akong pagkakataon na maging mas mabuting tao. Ikaw ang nagbigay sa akin ng lakas na humarap sa mga hamon ng buhay.

                                    Kaya nga, hindi lang ako natutuwa na ikaw ang kasama ko sa bawat anniversary na ito, kundi nagpapasalamat ako sa bawat araw na ikaw ang partner ko sa buhay. Ang pagmamahal mo ay nagsisilbing gabay sa aking landas, ang iyong mga pagkilos at salita ay nagpapalakas sa akin. Hindi ko matutumbasan ang lahat ng bagay na ginawa mo para sa ating relasyon, at hindi ko kayang bayaran ang bawat sakripisyo mo. Lahat ng iyon ay patunay na ikaw ang aking greatest love.

                                    Mahal kita hindi lang sa mga araw ng kasiyahan, kundi lalo na sa mga panahon ng pagsubok. Dahil sa iyong pagmamahal, natutunan kong mas maging matatag at mas mahalin pa ang ating relasyon. Lalo akong natututo at natutulungan mong maging mas mabuting tao, hindi lang para sa iyo, kundi para sa atin. Hindi ko kayang imaginin ang buhay ko nang wala ka. Kasama kita ngayon at magpakailanman, at sigurado akong ikaw ang greatest love na tinutukoy nila.
                                </p>
                                <p className='text-center mt-12'>To Be Continue</p>
                            </div>
                        </div>
                    </div>
                    <div className="heartEn"></div>
                </div>
            </div>
        </section>
    );
}
