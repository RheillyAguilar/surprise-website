
import imageFooter from '../../assets/footer-image.png'

export default function Footer() {
  return (
    <footer className='flex justify-around  bg-[#003049] text-white'>
        <div className='mt-5'>
            <h1 className='text-2xl font-bold'>Ai.</h1>
            <p className='text-xl'>Japanese: Anata wa watashi no ai desu.</p>
            <p className='text-xl'>English: You are my love.</p>
            <p className='text-xl'>Tagalog: Ikaw ang aking mahal.</p>
        </div>
            <img src={imageFooter} alt="" className='w-44' />
    </footer>
  )
}
