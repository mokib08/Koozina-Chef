import chef2 from '../../../assets/chef-2.png'

const FeatureVisual = () => {
    return (
        <div className='w-[45%] relative'>
            <img className='w-[500px] h-[700px] translate-x-[5em] object-contain' src={chef2} alt="" />

            {/* Top right card */}
            <div className=" absolute bottom-[17em] left-[27em] w-[14em]  p-[12px_16px] bg-white/95 rounded-[18px] shadow-[0_12px_35px_rgba(0,0,0,0.08)]  z-10">

                <div className='flex items-baseline '>
                    <div className="bg-red-100 py-2 px-3  rounded-[50%] ">
                        <i className="text-xl text-red-400 ri-group-fill"></i>
                    </div>

                    <div>
                        <strong className='text-red-950 text-3xl pl-3 font-bold'>13.4 K +</strong>
                        <br />
                        <small className='text-red-950 text-[1em] pl-3' >Active members</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureVisual
