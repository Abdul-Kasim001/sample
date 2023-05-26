import React from 'react'

export default function DetailsRight({bankName, bankAccount, preparedBy, approvedBy}) {
  return (
    <div className="mt-6 mb-14 bg-white">
    <div>
        <h3 className="font-bold text-base text-left bg-slate-200 px-2 p-1">
          Bank Details:
        </h3>
        <span className="text-left">
        <div>
          {bankName} 
        </div>
          <div className='pb-2'>
          {bankAccount}
          </div>
        </span>
      </div>
      <div className='d-flex flex-column'>
      <div>
        <h3 className="font-bold text-base text-left bg-slate-200 px-2 p-1">
          Prepared By:
        </h3>
        <p className="mt-2 text-left">{preparedBy}</p>
      </div>
      <div>
        <h3 className="font-bold text-base text-left bg-slate-200 px-2 p-1">
        Approved By:
        </h3>
        <p className="mt-2 text-left">{approvedBy}</p>
      </div>
      </div>
    </div>
  )
}
