import skillshare from '../../assets/skillshare-logo.png'
import udemy from '../../assets/udemy-logo.png'
import edx from '../../assets/edx-logo.png'
import coursera from '../../assets/Coursera-Logo.png'

const TrustedPartners = () => {
  return (
    <div className='bg-red-100 py-[3em]'>
      <h1 className='flex justify-center text-[4.5em] text-red-950 font-[600]'>Our Trusted <span className='pl-5 text-red-500'>Partners</span></h1>

      <div className='flex justify-center items-center gap-[10rem] '>
        <span><img className='w-[180px]' src={skillshare} alt="" /></span>
        <span><img className='w-[200px]' src={udemy} alt="" /></span>
        <span><img className='w-[200px]' src={edx} alt="" /></span>
        <span><img className='w-[200px]' src={coursera} alt="" /></span>
      </div>
    </div>
  )
}

export default TrustedPartners
