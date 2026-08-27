import chef1 from '../../assets/main-chef.png'
import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'

const HeroImage = () => {
  return (
    <div className='w-1/2 flex justify-center items-center '>
      <img className='w-[500px] translate-x-[5em] object-contain' src={chef1} alt="" />

      {/* Top right card */}
      <div className="absolute top-[29em] right-[6rem] w-[14em]  p-[12px_16px] bg-white/95 rounded-[18px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]  z-10">

        <div className='flex items-baseline '>
          <div className="bg-red-100 py-2 px-3  rounded-[50%] ">
            <i className="text-xl text-red-400 ri-group-fill"></i>
          </div>

          <div>
            <strong className='text-3xl text-red-950 pl-3 font-bold'>13.4 K +</strong>
            <br />
            <small className='text-[1em] text-red-950 pl-3' >Active members</small>
          </div>
        </div>
      </div>

      {/* Bottom left card */}
      <div className="absolute left-[54em] bottom-[115px] w-fit h-[2em] px-[2em] py-[4em] flex items-center bg-white/95 rounded-[18px] shadow-[0 12px 35px rgba(0, 0, 0, 0.08)] z-4 ">


        <div className="flex flex-col gap-[1em] ">
          <span className="bg-red-200 w-fit rounded-2xl px-4 py-1 font-[500] text-red-600 ">Experts</span>

          <div className="flex ">
            <span  className='ml-[-10px] ' >
                <img className='w-[50px] h-[50px] rounded-[50%] object-cover outline-white outline-5 ' src={image1} alt="" />
            </span>
            <span className='ml-[-10px]'>
                <img className='w-[50px] h-[50px] rounded-[50%] object-cover outline-white outline-5' src={image2} alt="" />
            </span>
            <span className='ml-[-10px] '>
                <img className='w-[50px] h-[50px] rounded-[50%] object-cover outline-white outline-5' src={image3} alt="" />
            </span>
            <span className='w-[50px] ml-[-10px] bg-red-200 font-bold text-red-500 rounded-[50%] p-3 outline-white outline-5 '>30+</span>

          </div>

        </div>
      </div>

    </div>
  )
}

export default HeroImage
