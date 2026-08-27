import React from 'react'

const FooterBrand = () => {
    return (
        <div className='w-[30%]'>
            <>
                <h1 className='text-[2.8em] font-[500] text-red-500'>Koozina.</h1>
                <span className='text-[1.3rem]'>Explore the art of cooking</span>
            </>

            <div className='mt-10 flex gap-[1em]  '>
                <li className='list-none bg-red-500 w-[2.5rem] text-white p-2 text-center rounded-full ' ><i class="fa-brands fa-instagram"></i></li>
                <li className='list-none bg-red-500 w-[2.5rem] text-white p-2 text-center rounded-full ' ><i class="fa-brands fa-facebook-f"></i></li>
                <li className='list-none bg-red-500 w-[2.5rem] text-white p-2 text-center rounded-full ' ><i class="fa-brands fa-x-twitter"></i></li>
                <li className='list-none bg-red-500 w-[2.5rem] text-white p-2 text-center rounded-full ' ><i class="fa-brands fa-youtube"></i></li>
                <li className='list-none bg-red-500 w-[2.5rem] text-white p-2 text-center rounded-full ' ><i class="fa-brands fa-tiktok"></i></li>
            </div>
        </div>
    )
}

export default FooterBrand
