import React from 'react';

export default function CustomerDetails({cname, address, gst, TypeofInstall, length, width, dimension, purpose}) {
  return (
    <div className='bg-white'>
    <section className="px-4 mt-6 mb-14 flex flex-column items-start justify-end">
    <h2 className="text-2xl uppercase font-bold mb-1 leading-3">{cname}</h2>
    <span className='pt-2'>{address}</span>
    <span className=''><b>{gst}</b></span>
    <span className='leading-7'><b>{TypeofInstall}</b></span>
    <span className='leading-7'>L:{length} W:{width} D:{dimension}</span>
    <span>{purpose}</span>
    </section>
  </div>
  )
}
