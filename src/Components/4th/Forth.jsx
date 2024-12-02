


import ImageOne from '../../assets/2024/2024-ImageOne.jpg'
import ImageTwo from '../../assets/2024/2024-ImageTwo.jpg'
import ImageThree from '../../assets/2024/2024-ImageThree.jpg'
import ImageFour from '../../assets/2024/2024-ImageFour.jpg'
import ImageFive from '../../assets/2024/2024-ImageFive.jpg'
import ImageSix from '../../assets/2024/2024-ImageSix.jpg'
import ImageSeven from '../../assets/2024/2024-ImageSeven.jpg'
import ImageEight from '../../assets/2024/2024-ImageEight.jpg'
import ImageNine from '../../assets/2024/2024-ImageNine.jpg'
import ImageTen from '../../assets/2024/2024-ImageTen.jpg'
import ImageEleven from '../../assets/2024/2024-ImageEleven.jpg'



export default function Forth() {
    return (
        <section className='p-10'>
            <div className="text-center">
                <h1 className="font-bold text-4xl">Year 2024</h1>
                <p className="max-w-3xl mx-auto text-2xl mt-2">
                    Life is the flower for which love is the honey            
                    <span className="font-bold"> — Victor Hugo</span>
                </p>
            </div>
            <div className="gallery mt-10">
                <img src={ImageOne} alt="" />
                <img src={ImageTwo} alt="" />
                <img src={ImageThree} alt="" />
                <img src={ImageFour} alt="" />
                <img src={ImageFive} alt="" />
                <img src={ImageSix} alt="" />
                <img src={ImageSeven} alt="" />
                <img src={ImageEight} alt="" />
                <img src={ImageNine} alt="" />
                <img src={ImageTen} alt="" />
                <img src={ImageEleven} alt="" />
            </div>
        </section>
    )
}
