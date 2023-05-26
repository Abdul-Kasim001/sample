import React from "react";

export default function DetailsLeft({amountWords, terms, delivery, paymentTerms,wiring, warranty, otherTerms}) {
  return (
    <div className="mt-6 mb-14 text-left bg-white">
      <div>
        <h3 className="font-bold text-base text-left bg-slate-200 px-2 p-1">
          Total Amount in Words:
        </h3>
        <p className="mt-2 px-1"><span className="font-semibold">INR.</span>{amountWords}</p>
      </div>
      <div>
        <h3 className="font-bold text-base text-left bg-slate-200 px-2 p-1">
          Terms and Condition:
        </h3>
        <p className="mt-2 px-1 break-words">
          {terms}
        </p>
      </div>
      <div>
        <h3 className="font-bold text-base text-left bg-slate-200 px-2 p-1">
          Delivery Time:
        </h3>
        <p className="mt-2 px-1">{delivery}</p>
      </div>
      <div>
        <h3 className="font-bold text-base text-left bg-slate-200 px-2 p-1">
          Payment Terms:
        </h3>
        <p className="mt-2 px-1">{paymentTerms}</p>
      </div>
      <div>
        <h3 className="font-bold text-base text-left bg-slate-200 px-2 p-1">
          Wiring:
        </h3>
        <p className="mt-2 px-1">{wiring}</p>
      </div>
      <div>
        <h3 className="font-bold text-base text-left bg-slate-200 px-2 p-1">
          Warranty:
        </h3>
        <p className="mt-2 px-1">{warranty}</p>
      </div>
      <div>
        <h3 className="font-bold text-base text-left bg-slate-200 px-2 p-1">
          Other Terms:
        </h3>
        <p className="mt-2 px-1">{otherTerms}</p>
      </div>
    </div>
  );
}
