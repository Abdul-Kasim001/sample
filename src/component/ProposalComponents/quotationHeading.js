import React from "react";

export default function QuotationHeading({ mainheading, date, place }) {
  return (
    <div className="bg-white">
      <div className="bg-slate-200 bg-center p-2">
        <h2 className="text-xl text-center uppercase font-bold mb-1 leading-3">
          {mainheading}
        </h2>
      </div>
      <article className="mt-1 mb-2 flex items-end justify-end">
        <ul className="flex flex-column items-start justify-end px-3">
          <li className="p-1">
            <span className="font-bold tracking-wide">Date :</span> {date}
          </li>
          <li className="p-1">
            <span className="font-bold tracking-normal">place :</span> {place}
          </li>
        </ul>
      </article>
    </div>
  );
}
