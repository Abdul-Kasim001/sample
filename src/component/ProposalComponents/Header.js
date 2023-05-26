import React from 'react';
import NkLogo from '../../assets/nkdecibels.png'

export default function Header() {
  return (
    <>
    {/* flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between */}
    <div className='bg-white'>
    <header className="flex items-start justify-between xl:flex-row xl:justify-between bg-gray-300 bg-origin-border hover:bg-origin-padding">
            <div className='mt-4 px-3'>
                <img src={NkLogo} alt="Logo" className=''/>
            </div>
            <article className='px-3'>
            <div className="font-bold uppercase text-2xl mt-4 text-right text-slate-600">NK Decibels</div>
            <div className='text-right'>
            <p className='text-right leading-normal pt-2'>44 APPAVU ST, ELLIS ROAD, 
            CHENNAI - 600 002  </p>
            <p className='leading-3'>Ph: <b>+91 44 28520317</b> </p>
            <p className='leading-4'>Email: info@nkdecibels.com  </p>
            <p className='leading-4'>Web: http://www.nkdecibels.com</p>
            </div> 
            </article>
    </header>
    </div>
    </>
  )
}
