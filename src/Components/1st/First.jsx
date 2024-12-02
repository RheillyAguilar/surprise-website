


import ImageOne from '../../assets/2021/2021-ImageOne.jpg'
import ImageTwo from '../../assets/2021/2021-ImageTwo.jpg'
import ImageThree from '../../assets/2021/2021-ImageThree.jpg'
import ImageFour from '../../assets/2021/2021-ImageFour.jpg'
import ImageFive from '../../assets/2021/2021-ImageFive.jpg'
import ImageSix from '../../assets/2021/2021-ImageSix.jpg'
import ImageSeven from '../../assets/2021/2021-ImageSeven.jpg'
import ImageEight from '../../assets/2021/2021-ImageEight.jpg'
import ImageNine from '../../assets/2021/2021-ImageNine.jpg'
import ImageTen from '../../assets/2021/2021-ImageTen.jpg'
import ImageEleven from '../../assets/2021/2021-ImageEleven.jpg'


export default function First() {
    return (
        <>
            <section className='p-10'>
                <div className="text-center">
                    <h1 className="font-bold text-4xl">Year 2021</h1>
                    <p className="max-w-3xl mx-auto text-2xl mt-2">
                        Love has nothing to do with what you are expecting to get only with what you are expecting to give which is everything.
                        <span className="font-bold"> - Katherine Hepburn</span>
                    </p>
                </div>
                <div className="gallery mt-10">
                    <img src={ImageOne} alt=""  />
                    <img src={ImageTwo} alt=""  />
                    <img src={ImageThree} alt=""  />
                    <img src={ImageFour} alt=""  />
                    <img src={ImageFive} alt=""  />
                    <img src={ImageSix} alt=""  />
                    <img src={ImageSeven} alt=""  />
                    <img src={ImageEight} alt=""  />
                    <img src={ImageNine} alt=""  />
                    <img src={ImageTen} alt=""  />
                    <img src={ImageEleven} alt=""  />
                </div>
            </section>
        </>
    )
}
