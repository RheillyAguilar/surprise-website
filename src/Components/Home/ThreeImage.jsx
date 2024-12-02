
import imageOne from '../../assets/imageOne.jpg'
import imageTwo from '../../assets/imageTwo.jpg'
import imageThree from '../../assets/imageThree.jpg'

export default function ThreeImage() {
  return (
    <section className='py-40 flex items-center justify-center gap-10'>
        <img src={imageOne} alt="" className='max-w-md rounded-md h-[60vh]' />
        <img src={imageTwo} alt="" className='max-w-md rounded-md h-[60vh]' />
        <img src={imageThree} alt="" className='max-w-md rounded-md h-[60vh]' />

    </section>
  )
}
