import React, { useState, useEffect, useRef } from "react";
import NkLogo from "../../assets/nkdecibels.png";
import "../TemplatePages/Templatepage.css";
import { useParams } from "react-router-dom";
import ReactToPrint from "react-to-print";
import {Button} from "primereact/button";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';
import Api from "../../Api";
import Container from 'react-bootstrap/Container';
// import "./Templatepage.css";

const ProposalPreviewer = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const componentRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Api.get(`addProposal/proposal_getone/${id}`).then((res) => {
      console.log(res.data);
      setData(res.data.data);
    });
  };
  return (
    <>
    <div className="px-5 py-2">
    <div className="mt-3 bg-white mb-3 mx-4 pb-4">
          <div className="mt-3 px-4 xl:grid grid-cols xl:items-start bg-white py-4" >
          <header className="pt-2 bg-slate-800 flex items-start justify-between xl:flex-row xl:justify-between bg-gray-100 bg-origin-border hover:bg-origin-padding">
            <div className="mt-4 px-3">
              <img src={NkLogo} alt="Logo" className=""/>
            </div>
            <article className="px-3">
              <div className="font-bold uppercase text-2xl mt-4 text-right text-slate-600">
                NK Decibels
              </div>
              <div className="text-right">
                <p className="text-right leading-normal pt-2">
                  44 APPAVU ST, ELLIS ROAD, CHENNAI - 600 002{" "}
                </p>
                <p className="leading-3">
                  Ph: <b>+91 44 28520317</b>{" "}
                </p>
                <p className="leading-4">Email: info@nkdecibels.com </p>
                <p className="leading-4">Web: http://www.nkdecibels.com</p>
              </div>
            </article>
          </header>
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

          <div className="bg-slate-300 bg-center p-2">
            <h2 className="text-xl text-center uppercase font-bold mb-1 leading-3">
              {data.mainheading}
            </h2>
          </div>
          <article className="mt-1 mb-2 flex items-end justify-end">
            <ul className="flex flex-column items-start justify-end px-3">
              <li className="p-1">
                <span className="font-bold tracking-wide">Date :</span>{" "}
                {data.date}
              </li>
              <li className="p-1">
                <span className="font-bold tracking-normal">place :</span>{" "}
                {data.place}
              </li>
            </ul>
          </article>
          <table width="100%" className="mb-10">
            <thead className="bg-slate-300 border-b border-gray-300">
              <tr className="text-left">
                <td className="font-bold">Description</td>
                <td className="font-bold">Quantity</td>
                <td className="font-bold">Price</td>
                <td className="font-bold">Amount</td>
                <td className="font-bold">MRP / Unit</td>
              </tr>
            </thead>
            {/* {data.map(
          ({data, _id}) => (
            <React.Fragment key={_id}>
              <tbody>
                <tr>
                  <td
                    colspan="6"
                    className="p-1 col font-semibold border-solid border-b border-gray-300 text-center text-teal-800"
                  >
                    {data.subheader}
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="h-10 text-left">
                  <td className="px-2">{data.description}</td>
                  <td className="px-1">{data.quantity}</td>
                  <td className="px-1">{data.price}</td>
                  <td className="px-1">{data.amount}</td>
                  <td className="px-1">{data.mrp}</td>
                </tr>
              </tbody>
            </React.Fragment>
          )
        {/* )} */}
          </table>

          <div>
            <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
              Rs. {data.subTotal}
            </h2>
          </div>
          <div className="flex flex-row gap-x-5">
            <Col>
              <div className="mb-14 text-left">
                <div>
                  <h3 className="font-bold text-base text-left bg-gray-200 px-2 p-1">
                    Total Amount in Words:
                  </h3>
                  <p className="mt-2 px-1">
                    <span className="font-semibold">INR.</span>
                    {data.amountWords}
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-base text-left bg-gray-200 px-2 p-1">
                    Terms and Condition:
                  </h3>
                  <p className="mt-2 px-1 break-words">{data.terms}</p>
                </div>
                <div>
                  <h3 className="font-bold text-base text-left bg-gray-200 px-2 p-1">
                    Delivery Time:
                  </h3>
                  <p className="mt-2 px-1">{data.delivery}</p>
                </div>
                <div>
                  <h3 className="font-bold text-base text-left bg-gray-200 px-2 p-1">
                    Payment Terms:
                  </h3>
                  <p className="mt-2 px-1">{data.paymentTerms}</p>
                </div>
                <div>
                  <h3 className="font-bold text-base text-left bg-gray-200 px-2 p-1">
                    Wiring:
                  </h3>
                  <p className="mt-2 px-1">{data.wiring}</p>
                </div>
                <div>
                  <h3 className="font-bold text-base text-left bg-gray-200 px-2 p-1">
                    Warranty:
                  </h3>
                  <p className="mt-2 px-1">{data.warranty}</p>
                </div>
                <div>
                  <h3 className="font-bold text-base text-left bg-gray-200 px-2 p-1">
                    Other Terms:
                  </h3>
                  <p className="mt-2 px-1">{data.otherTerms}</p>
                </div>
              </div>
            </Col>

            <Col>
              <div>
                <h3 className="font-bold text-base text-left bg-gray-200 px-2 p-1">
                  Bank Details:
                </h3>
                <span className="text-left">
                  <div>{data.bankName}</div>
                  <div className="pb-2">{data.bankAccount}</div>
                </span>
              </div>
              <div className="d-flex flex-column">
                <div>
                  <h3 className="font-bold text-base text-left bg-gray-200 px-2 p-1">
                    Prepared By:
                  </h3>
                  <p className="mt-2 text-left">{data.preparedBy}</p>
                </div>
                <div>
                  <h3 className="font-bold text-base text-left bg-gray-200 px-2 p-1">
                    Approved By:
                  </h3>
                  <p className="mt-2 text-left">{data.approvedBy}</p>
                </div>
              </div>
            </Col>
          </div>
        </div>
        <div className="print-btn">
        <Button className="p-button d-felx justify-content-center align-items-center"
                onClick={() => navigate("/admin/listProposal")}
              >
                Back To List
              </Button>
                <ReactToPrint
                  trigger={() => (
                    <Button className="p-button d-felx justify-content-center align-items-center">
                      Print / Download
                    </Button>
                  )}
                  content={() => componentRef.current}
                />
              </div>
      </div>
      </div>
    </>
  );
};

export default ProposalPreviewer;
