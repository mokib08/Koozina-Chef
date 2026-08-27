import React from 'react'
import FooterBrand from './FooterBrand'
import FooterColumn from './FooterColumn'
import FooterBottom from './FooterBottom'

const Footer = () => {
    return (
        <>

            <div className='flex gap-[5rem] py-[8em]'>
                <FooterBrand />
                <FooterColumn />
            </div>
            <FooterBottom />
        </>
    )
}

export default Footer
