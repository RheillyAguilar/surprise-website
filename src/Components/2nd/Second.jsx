

import ImageOne from '../../assets/2022/2022-ImageOne.jpeg'
import ImageTwo from '../../assets/2022/2022-ImageTwo.jpeg'
import ImageThree from '../../assets/2022/2022-ImageThree.jpeg'
import ImageFour from '../../assets/2022/2022-ImageFour.jpeg'
import ImageFive from '../../assets/2022/2022-ImageFive.jpeg'
import ImageSix from '../../assets/2022/2022-ImageSix.jpeg'
import ImageSeven from '../../assets/2022/2022-ImageSeven.jpeg'
import ImageEight from '../../assets/2022/2022-ImageEight.jpeg'
import ImageNine from '../../assets/2022/2022-ImageNine.jpeg'
import ImageTen from '../../assets/2022/2022-ImageTen.jpeg'
import ImageEleven from '../../assets/2022/2022-ImageEleven.jpeg'
import ImageTwelve from '../../assets/2022/2022-ImageTwelve.jpeg'
import ImageThirteen from '../../assets/2022/2022-ImageThirteen.jpg'
import ImageForteen from '../../assets/2022/2022-ImageForteen.jpg'
import ImageFifteen from '../../assets/2022/2022-ImageFifteen.jpeg'
import ImageSixteen from '../../assets/2022/2022-ImageSixteen.jpeg'
import ImageSeventeen from '../../assets/2022/2022-ImageSeventeen.jpeg'
import ImageEighteen from '../../assets/2022/2022-ImageEighteen.jpeg'
import ImageNineteen from '../../assets/2022/2022-ImageNineteen.jpeg'
import ImageTwenty from '../../assets/2022/2022-ImageTwenty.jpg'
import { useState } from 'react'
import SecondMessage from './SecondMessage'


export default function Second() {

  const [isVisible, setIsVisible] = useState(false);

  const handleImageClick = () => {
      setIsVisible(true);
  };


  return (
    <>
         <section className='p-10'>
         {isVisible && <SecondMessage onClose={() => setIsVisible(false)} />}
                <div className="text-center">
                    <h1 className="font-bold text-4xl">Year 2022</h1>
                    <h1> <strong>TAKE NOTE :</strong> Find the 8th Image</h1>
                    <p className="max-w-3xl mx-auto text-2xl mt-2">
                        I am grateful that you were born, that your love is mine, and our two lives are woven and welded together
                        <span className="font-bold"> — Mark Twain</span>
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
                    <img src={ImageEight} alt=""  onClick={handleImageClick}/>
                    <img src={ImageNine} alt=""  />
                    <img src={ImageTen} alt=""  />
                    <img src={ImageEleven} alt=""  />
                    <img src={ImageTwelve} alt=""  />
                    <img src={ImageThirteen} alt=""  />
                    <img src={ImageForteen} alt=""  />
                    <img src={ImageFifteen} alt=""  />
                    <img src={ImageSixteen} alt=""  />
                    <img src={ImageSeventeen} alt=""  />
                    <img src={ImageEighteen} alt=""  />
                    <img src={ImageNineteen} alt=""  />
                    <img src={ImageTwenty} alt=""  />
                </div>
            </section>
    </>
  )
}
