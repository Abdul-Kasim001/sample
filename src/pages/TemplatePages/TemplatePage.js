import React, { useState, useRef, useEffect } from "react";
import CustomerDetails from "../../component/TemplateComponent/CustomerDetails";
import DetailsLeft from "../../component/TemplateComponent/DetailsLeft";
import DetailsRight from "../../component/TemplateComponent/DetailsRight";
import Header from "../../component/TemplateComponent/Header";
import QuotationHeading from "../../component/TemplateComponent/quotationHeading";
import Table from "../../component/TemplateComponent/Table";
import TableForm from "../../component/TemplateComponent/TableForm";
import ReactToPrint from "react-to-print";
import {Button} from "primereact/button";
import "./Templatepage.css";
import { useForm } from "react-hook-form";
import Col from "react-bootstrap/Col";
import { Card } from "@material-ui/core";

function TemplatePage() {
  const [cname, setName] = useState("Customer1");
  const [address, setAddress] = useState("12, Velachery, Chennai");
  const [gst, setGst] = useState("33AAATC1245K1ZE");
  // const [roomsize, setRoomSize] = useState("1500");
  const [length, setLength] = useState();
  const [width, setWidth] = useState();
  const [dimension, setDimension] = useState();
  const [mainheading, setMainheading] = useState("Quotation for 122 x 72 ft");
  const [date, setDate] = useState("5/2/2022");
  const [place, setPlace] = useState("Chennai");
  const [purpose, setPurpose] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  );
  const [amountWords, setAmountWords] = useState(
    "Seven Lakhs Sixty One Thousand Six Hundred And Twenty Five Only"
  );
  const [terms, setTerms] = useState(
    "Prices are subject to Chennai jurisdiction only, All Prices are Inclusive of 18% GST, Quotation is valid for 30 Business Days"
  );
  const [delivery, setDelivery] = useState(
    "20 Business Days Lead Time from the Purchase Order"
  );
  const [paymentTerms, setPaymentTerms] = useState("100% Advance Payment");
  const [warranty, setWarranty] = useState(
    "1 Year Warranty for Amplifiers & Speakers"
  );
  const [otherTerms, setOtherTerms] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  );
  const [bankName, setBankName] = useState("Lorem Ipsum is simply dummy");
  const [bankAccount, setBankAccount] = useState("987654321062");
  const [preparedBy, setPreparedBy] = useState("name");
  const [approvedBy, setApprovedBy] = useState("name");

  // Table Fields
  const [subheader, setSubheader] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [mrp, setMrp] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  //stateSwitcher
  const [showInvoice, setShowInvoice] = useState(true);

  const componentRef = useRef();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  console.log("getvaluessss", getValues());

  const onSubmit = (data) => console.log(data);

  // useEffect(()=>{
  //   const LengthConverter = (dimension) =>{
  //     document.getElementById("outputMeters").innerHTML=dimension/3.2808;
  //   };

  //   LengthConverter(dimension);
  // });

  return (
    <>
      <div className="m-1 p-2 xl:grid grid-cols xl:items-start">
        {showInvoice ? (
          <div className="invoice__preview bg-white p-5">
            <div ref={componentRef} className="p-4 bg-white">
              <Header />

              <CustomerDetails
                cname={cname}
                address={address}
                gst={gst}
                length={length}
                width={width}
                dimension={dimension}
                purpose={purpose}
              />

              <QuotationHeading
                mainheading={mainheading}
                date={date}
                place={place}
              />

              <Table
                subheader={subheader}
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                mrp={mrp}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
              <div className="flex flex-row gap-x-5">
                <Col>
                  <DetailsLeft
                    amountWords={amountWords}
                    delivery={delivery}
                    terms={terms}
                    paymentTerms={paymentTerms}
                    warranty={warranty}
                    otherTerms={otherTerms}
                  />
                </Col>
                <Col>
                  <DetailsRight
                    bankName={bankName}
                    bankAccount={bankAccount}
                    preparedBy={preparedBy}
                    approvedBy={approvedBy}
                  />
                </Col>
              </div>
            </div>
            <div className="print-btn">
              <Button className="p-button d-felx justify-content-center align-items-center"
                onClick={() => setShowInvoice(false)}
              >
                Edit Information
              </Button>

              <div>
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
        ) : (
          <div className="bg-white p-5 rounded shadow">
            <div className="flex flex-col justify-center">
              <form onSubmit={handleSubmit(onSubmit)}>
                <article className="md:grid grid-cols-2 gap-x-10">
                  <div className="flex flex-col mt-1">
                    <label htmlFor="cname">Customer name</label>
                    <input
                      type="text"
                      name="cname"
                      id="cname"
                      placeholder="Enter your Customer name"
                      autoComplete="off"
                      value={cname}
                      {...register("cname", {
                        required: true,
                        onChange: (e) => {
                          setName(e.target.value);
                        },
                      })}
                    />
                    {errors?.cname?.type === "required" && (
                      <p className="error text-left">Name is required</p>
                    )}
                  </div>

                  <div className="flex flex-col mt-1">
                    <label htmlFor="address">Customer address</label>
                    <input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter your Customer address"
                      autoComplete="off"
                      value={address}
                      {...register("address", {
                        required: true,
                        onChange: (e) => {
                          setAddress(e.target.value);
                        },
                      })}
                    />
                    {errors?.address?.type === "required" && (
                      <p className="error text-left">Address is required</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="gst">GST in</label>
                    <input
                      type="text"
                      name="gst"
                      id="gst"
                      placeholder="Ex:33AAATC****K1ZE"
                      autoComplete="off"
                      value={gst}
                      {...register("gst", {
                        required: true,
                        onChange: (e) => {
                          setGst(e.target.value);
                        },
                      })}
                    />
                    {errors?.gst?.type === "required" && (
                      <p className="error text-left">gst is required</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="purpose">purpose of this solution</label>
                    <input
                      type="text"
                      name="purpose"
                      id="purpose"
                      placeholder="Purpose..."
                      autoComplete="off"
                      value={purpose}
                      {...register("purpose", {
                        required: true,
                        onChange: (e) => {
                          setPurpose(e.target.value);
                        },
                      })}
                    />
                    {errors?.purpose?.type === "required" && (
                      <p className="error text-left">Purpose is required</p>
                    )}
                  </div>
                </article>
                <article className="md:grid grid-cols-3 gap-x-10">
                  <div className="flex flex-col">
                    <label htmlFor="length">Length</label>
                    <input
                      type="number"
                      name="length"
                      id="length"
                      placeholder="Length in feet"
                      autoComplete="off"
                      value={length}
                      {...register("length", {
                        required: true,
                        onChange: (e) => {
                          setLength(e.target.value);
                        },
                      })}
                    />
                    {errors?.length?.type === "required" && (
                      <p className="error text-left">Length is required</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="width">Width</label>
                    <input
                      type="number"
                      name="width"
                      id="width"
                      placeholder="width in feet"
                      autoComplete="off"
                      value={width}
                      {...register("width", {
                        required: true,
                        onChange: (e) => {
                          setWidth(e.target.value);
                        },
                      })}
                    />
                    {errors?.width?.type === "required" && (
                      <p className="error text-left">width is required</p>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="dimension">Dimension</label>
                    <span className="p-inputnumber p-component p-inputwrapper p-inputwrapper-filled p-inputnumber-buttons-stacked">
                      <input
                        className="rounded-l"
                        type="number"
                        name="dimension"
                        id="dimension"
                        placeholder="dimension in feet"
                        autoComplete="off"
                        value={dimension}
                        {...register("dimension", {
                          required: true,
                          onChange: (e) => {
                            setDimension(e.target.value);
                          },
                        })}
                      />
                      <button className="rounded-r-xl border-none bg-blue-500 hover:bg-blue-800 text-white">
                        .mm
                      </button>
                    </span>
                    {errors?.dimension?.type === "required" && (
                      <p className="error text-left">dimension is required</p>
                    )}
                  </div>
                </article>
                <article className="md:grid grid-cols-3 gap-x-10">
                  <div className="flex flex-col mt-1">
                    <label htmlFor="name">Quotation Heading</label>
                    <input
                      type="text"
                      name="mainheading"
                      id="mainheading"
                      placeholder="Quotation heading"
                      autoComplete="off"
                      value={mainheading}
                      {...register("mainheading", {
                        required: true,
                        onChange: (e) => {
                          setMainheading(e.target.value);
                        },
                      })}
                    />
                    {errors?.mainheading?.type === "required" && (
                      <p className="error text-left">Heading is required</p>
                    )}
                  </div>

                  <div className="flex flex-col mt-1">
                    <label htmlFor="address">Date</label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      autoComplete="off"
                      value={date}
                      {...register("date", {
                        required: true,
                        onChange: (e) => {
                          setDate(e.target.value);
                        },
                      })}
                    />
                    {errors?.date?.type === "required" && (
                      <p className="error text-left">Date is required</p>
                    )}
                  </div>

                  <div className="flex flex-col mt-1">
                    <label htmlFor="address">Place</label>
                    <input
                      type="text"
                      name="place"
                      id="place"
                      autoComplete="off"
                      value={place}
                      {...register("place", {
                        required: true,
                        onChange: (e) => {
                          setPlace(e.target.value);
                        },
                      })}
                    />
                    {errors?.place?.type === "required" && (
                      <p className="error text-left">Place is required</p>
                    )}
                  </div>
                </article>
                <article>
                  <TableForm
                    subheader={subheader}
                    setSubheader={setSubheader}
                    description={description}
                    setDescription={setDescription}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    price={price}
                    setPrice={setPrice}
                    mrp={mrp}
                    setMrp={setMrp}
                    amount={amount}
                    setAmount={setAmount}
                    list={list}
                    setList={setList}
                    total={total}
                    setTotal={setTotal}
                  />
                </article>
                <article className="md:grid grid-cols-3 gap-x-10 mt-10">
                  <div className="flex flex-col mt-1">
                    <label htmlFor="amountWords">Total Amount in Words</label>
                    <input
                      type="text"
                      name="amountWords"
                      id="amountWords"
                      autoComplete="off"
                      value={amountWords}
                      {...register("amountWords", {
                        required: true,
                        onChange: (e) => {
                          setAmountWords(e.target.value);
                        },
                      })}
                    />
                    {errors?.amountWords?.type === "required" && (
                      <p className="error text-left">This field is required</p>
                    )}
                  </div>
                  <div className="flex flex-col mt-1">
                    <label htmlFor="terms">Terms and Condition</label>
                    <textarea
                      style={{ whiteSpace: "preWrap" }}
                      type="text"
                      name="terms"
                      id="terms"
                      autoComplete="off"
                      value={terms}
                      {...register("terms", {
                        required: true,
                        onChange: (e) => {
                          setTerms(e.target.value);
                        },
                      })}
                    />
                    {errors?.terms?.type === "required" && (
                      <p className="error text-left">This field is required</p>
                    )}
                  </div>
                  <div className="flex flex-col mt-1">
                    <label htmlFor="delivery">Delivery Time:</label>
                    <input
                      type="text"
                      name="delivery"
                      id="delivery"
                      autoComplete="off"
                      value={delivery}
                      {...register("delivery", {
                        required: true,
                        onChange: (e) => {
                          setDelivery(e.target.value);
                        },
                      })}
                    />
                    {errors?.delivery?.type === "required" && (
                      <p className="error text-left">This field is required</p>
                    )}
                  </div>
                  <div className="flex flex-col mt-1">
                    <label htmlFor="paymentTerms">Payment Terms:</label>
                    <input
                      type="text"
                      name="paymentTerms"
                      id="paymentTerms"
                      autoComplete="off"
                      value={paymentTerms}
                      {...register("paymentTerms", {
                        required: true,
                        onChange: (e) => {
                          setPaymentTerms(e.target.value);
                        },
                      })}
                    />
                    {errors?.paymentTerms?.type === "required" && (
                      <p className="error text-left">This field is required</p>
                    )}
                  </div>
                  <div className="flex flex-col mt-1">
                    <label htmlFor="warranty">Warranty:</label>
                    <textarea
                      type="text"
                      name="warranty"
                      id="warranty"
                      autoComplete="off"
                      value={warranty}
                      {...register("warranty", {
                        required: true,
                        onChange: (e) => {
                          setWarranty(e.target.value);
                        },
                      })}
                    />
                    {errors?.warranty?.type === "required" && (
                      <p className="error text-left">This field is required</p>
                    )}
                  </div>

                  <div className="flex flex-col mt-1">
                    <label htmlFor="otherTerms">Other Terms:</label>
                    <textarea
                      type="text"
                      name="otherTerms"
                      id="otherTerms"
                      autoComplete="off"
                      value={otherTerms}
                      onChange={(e) => setOtherTerms(e.target.value)}
                    />
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-x-10">
                  <div className="flex flex-col">
                    <label htmlFor="bankName">Enter your bank name</label>
                    <input
                      type="text"
                      name="bankName"
                      id="bankName"
                      placeholder="Enter your bank name"
                      autoComplete="off"
                      value={bankName}
                      {...register("bankName", {
                        required: true,
                        onChange: (e) => {
                          setBankName(e.target.value);
                        },
                      })}
                    />
                    {errors?.bankName?.type === "required" && (
                      <p className="error text-left">This field is required</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="bankAccount">Account number</label>
                    <input
                      type="text"
                      name="bankAccount"
                      id="bankAccount"
                      placeholder="Enter your bank account number"
                      autoComplete="off"
                      value={bankAccount}
                      {...register("bankAccount", {
                        required: true,
                        onChange: (e) => {
                          setBankAccount(e.target.value);
                        },
                      })}
                    />
                    {errors?.bankAccount?.type === "required" && (
                      <p className="error text-left">This field is required</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="preparedby">Prepared By</label>
                    <input
                      type="text"
                      name="preparedBy"
                      id="preparedBy"
                      placeholder="preparedBy.."
                      autoComplete="off"
                      value={preparedBy}
                      {...register("preparedBy", {
                        required: true,
                        onChange: (e) => {
                          setPreparedBy(e.target.value);
                        },
                      })}
                    />
                    {errors?.preparedBy?.type === "required" && (
                      <p className="error text-left">This field is required</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="approvedBy">Approved By</label>
                    <input
                      type="text"
                      name="approvedBy"
                      id="approvedBy"
                      placeholder="approvedBy.."
                      autoComplete="off"
                      value={approvedBy}
                      {...register("approvedBy", {
                        required: true,
                        onChange: (e) => {
                          setApprovedBy(e.target.value);
                        },
                      })}
                    />
                    {errors?.approvedBy?.type === "required" && (
                      <p className="error text-left">This field is required</p>
                    )}
                  </div>

                  <div className="d-flex justify-content-center align-items-end">
                    <Button className="p-button d-felx justify-content-center align-items-center"
                      type="submit">
                      Save
                    </Button>
                  </div>

                  <div className="d-flex justify-content-center align-items-end">
                    <Button className="p-button d-felx justify-content-center align-items-center"
                      onClick={() => setShowInvoice(true)}
                    >
                     Preview Template
                    </Button>
                  </div>
                </article>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default TemplatePage;
