

import Navigation from '../Components/Navigation/Navigation'
import Footer from '../Components/Footer/Footer'
import videoGreet from '../../src/assets/video-greet.mp4'

export default function VideoPage() {
  return (
    <>
        <Navigation />
            <div className='pt-10 pb-32'>
                <h1 className='font-bold text-3xl text-center'>Hope you like it again!</h1>
                <p className='text-center mb-5 text-xl'>Take Note: Please use full screen to better view.</p>
                <video src={videoGreet} controls={true} className='w-[60%] mx-auto'></video>
            </div>
        <Footer />
    </>
  )
}
