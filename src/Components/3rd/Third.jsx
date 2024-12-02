

import ImageOne from '../../assets/2023/2023-ImageOne.jpeg'
import ImageThree from '../../assets/2023/2023-ImageThree.jpeg'
import ImageFour from '../../assets/2023/2023-ImageFour.jpeg'
import ImageFive from '../../assets/2023/2023-ImagFive.jpeg'
import ImageSix from '../../assets/2023/2023-ImageSix.jpeg'
import ImageSeven from '../../assets/2023/2023-ImageSeven.jpeg'
import ImageEight from '../../assets/2023/2023-ImageEight.jpeg'
import ImageNine from '../../assets/2023/2023-ImageNine.jpeg'
import ImageTen from '../../assets/2023/2023-ImageTen.jpeg'
import ImageEleven from '../../assets/2023/2023-ImageEleven.jpeg'
import ImageTwelve from '../../assets/2023/2023-ImageTwelve.jpeg'
import ImageThirteen from '../../assets/2023/2023-ImageThirteen.jpeg'
import ImageForteen from '../../assets/2023/2023-ImageForteen.jpeg'
import ThirdMessage from './ThirdMessage'
import { useState } from 'react'



export default function Third() {

  
  const [isVisible, setIsVisible] = useState(false);

  const handleImageClick = () => {
      setIsVisible(true);
  };


  return (
    <>
         <section className='p-10'>
         {isVisible && <ThirdMessage onClose={() => setIsVisible(false)} />}
                <div className="text-center">
                    <h1 className="font-bold text-4xl">Year 2023</h1>
                    <h1> <strong>TAKE NOTE :</strong> Find the 9th Image.</h1>
                    <p className="max-w-3xl mx-auto text-2xl mt-2">
                        I am grateful that you were born, that your love is mine, and our two lives are woven and welded together
                        <span className="font-bold"> — Mark Twain</span>
                    </p>
                </div>
                <div className="gallery mt-10">
                    <img src={ImageOne} alt=""  />
                    <img src={ImageThree} alt=""  />
                    <img src={ImageFour} alt=""  />
                    <img src={ImageFive} alt=""  />
                    <img src={ImageSix} alt=""  />
                    <img src={ImageSeven} alt=""  />
                    <img src={ImageEight} alt=""  />
                    <img src={ImageNine} alt=""  />
                    <img src={ImageTen} alt=""  onClick={handleImageClick}/>
                    <img src={ImageEleven} alt=""  />
                    <img src={ImageTwelve} alt=""  />
                    <img src={ImageThirteen} alt=""  />
                    <img src={ImageForteen} alt=""  />
                </div>
            </section>
    </>
  )
}
