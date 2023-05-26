import React from 'react';

export default function CustomerDetails({data}) {
  return (
    <div className='bg-white'>
    <section className="px-4 mt-6 mb-14 flex flex-column items-start justify-end bg-white">
            <h2 className="text-2xl uppercase font-bold mb-1 leading-3">
              {data.customerName}
            </h2>
            <span className="pt-2">{data.customerAddress}</span>
            <span className="">
              <b>{data.gstin}</b>
            </span>
            <span className="leading-7">
              <b>{data.TypeofInstall}</b>
            </span>
            <span className="leading-7">
              L:{data.length} W:{data.width} D:{data.depth}
            </span>
            <span>{data.purpose}</span>
          </section>
  </div>
  )
}
