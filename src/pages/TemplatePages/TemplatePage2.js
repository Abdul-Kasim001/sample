import React, { useState, useRef, useEffect } from "react";
import CustomerDetails from "../../component/TemplateComponent/CustomerDetails";
import DetailsLeft from "../../component/TemplateComponent/DetailsLeft";
import DetailsRight from "../../component/TemplateComponent/DetailsRight";
import Header from "../../component/TemplateComponent/Header";
import QuotationHeading from "../../component/TemplateComponent/quotationHeading";
import Table from "../../component/TemplateComponent/Table";
import TableForm from "../../component/TemplateComponent/TableForm";
import ReactToPrint from "react-to-print";
import "./Templatepage.css";
import { useForm } from "react-hook-form";
import Col from "react-bootstrap/Col";
import Notes from "../../component/TemplateComponent/Notes";

function TemplatePage2() {
  const [cname, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gst, setGst] = useState("");
  const [typeofInstall, setTypeofInstall] = useState("");
  const [roomsize, setRoomSize] = useState("");
  const [mainheading, setMainheading] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [privateTheatre, setPrivateTheatre] = useState("")
  const [purpose, setPurpose] = useState("");
  const [amountWords, setAmountWords] = useState("");
  const [terms, setTerms] = useState("");
  const [delivery, setDelivery] = useState("");
  const [paymentTerms, setPaymentTerms] = useState("");
  const [wiring, setWiring] = useState("");
  const [warranty, setWarranty] = useState("");
  const [otherTerms, setOtherTerms] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [preparedBy, setPreparedBy] = useState("");
  const [approvedBy, setApprovedBy] = useState("");
  const [notes, setNotes] = useState("");

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

  return (
    <>
      <div className="container-fluid p-5">
        {showInvoice ? (
          <div className="invoice__preview bg-white p-5 ">
            <div ref={componentRef} className="p-4 bg-white">
              <Header />

              <CustomerDetails
                cname={cname}
                address={address}
                gst={gst}
                roomsize={roomsize}
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
                    wiring={wiring}
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

              <Notes notes={notes}/>

              
              </div>
              <div className="print-btn">
                <button
                  onClick={() => setShowInvoice(false)}
                  className="mt-1 bg-blue-500 text-white font-bold py-2 px-4 rounded shadow border-none hover:bg-blue-800 transition-all duration-300"
                >
                  Edit Information
                </button>

                <div>
                  <ReactToPrint
                    trigger={() => (
                      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow border-none border-blue-500 hover:bg-blue-800 transition-all duration-300">
                        Print / Download
                      </button>
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
                      {...register("cname", { required: true, onChange: (e) => {setName(e.target.value)}},)}
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
                      {...register("address", { required: true, onChange: (e) => {setAddress(e.target.value)}},)}
                    />
                    {errors?.address?.type === "required" && (
                    <p className="error text-left">Address is required</p>
                    )}
                  </div>
                </article>
                <article className="md:grid grid-cols-4 gap-x-10">
                  <div className="flex flex-col">
                    <label htmlFor="gst">GST in</label>
                    <input
                      type="text"
                      name="gst"
                      id="gst"
                      placeholder="Ex:33AAATC****K1ZE"
                      autoComplete="off"
                      value={gst}
                      {...register("gst", { required: true, onChange: (e) => {setGst(e.target.value)}},)}
                    />
                    {errors?.gst?.type === "required" && (
                    <p className="error text-left">gst is required</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="typeofInstall">Type of Install</label>
                    <input
                      type="text"
                      name="typeofInstall"
                      id="typeofInstall"
                      placeholder="ex:Configuration"
                      autoComplete="off"
                      value={typeofInstall}
                      {...register("typeofInstall", { required: true, onChange: (e) => {setTypeofInstall(e.target.value)}},)}
                    />
                    {errors?.typeofInstall?.type === "required" && (
                    <p className="error text-left">Size is required</p>
                    )}
                  </div>


                  <div className="flex flex-col">
                    <label htmlFor="roomsize">Size of The Room</label>
                    <input
                      type="text"
                      name="roomsize"
                      id="roomsize"
                      placeholder="h x w x d in feet"
                      autoComplete="off"
                      value={roomsize}
                      {...register("roomsize", { required: true, onChange: (e) => {setRoomSize(e.target.value)}},)}
                    />
                    {errors?.roomsize?.type === "required" && (
                    <p className="error text-left">Size is required</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="privateTheatre">Private Theatre</label>
                    <input
                      type="text"
                      name="privateTheatre"
                      id="privateTheatre"
                      placeholder="privateTheatres..."
                      autoComplete="off"
                      value={privateTheatre}
                      {...register("privateTheatre", { required: true, onChange: (e) => {setPrivateTheatre(e.target.value)}},)}
                    />
                    {errors?.privateTheatre?.type === "required" && (
                    <p className="error text-left">this field is required</p>
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
                      {...register("mainheading", { required: true, onChange: (e) => {setMainheading(e.target.value)}},)}
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
                      {...register("date", { required: true, onChange: (e) => {setDate(e.target.value)}},)}
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
                      {...register("place", { required: true, onChange: (e) => {setPlace(e.target.value)}},)}
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
                      {...register("amountWords", { required: true, onChange: (e) => {setAmountWords(e.target.value)}},)}
                    />
                    {errors?.amountWords?.type === "required" && (
                    <p className="error text-left">This field is required</p>
                    )}
                  </div>
                  <div className="flex flex-col mt-1">
                    <label htmlFor="terms">Terms and Condition</label>
                    <textarea
                      style={{whiteSpace:'preWrap'}}
                      type="text"
                      name="terms"
                      id="terms"
                      autoComplete="off"
                      value={terms}
                      {...register("terms", { required: true, onChange: (e) => {setTerms(e.target.value)}},)}
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
                      {...register("delivery", { required: true, onChange: (e) => {setDelivery(e.target.value)}},)}
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
                      {...register("paymentTerms", { required: true, onChange: (e) => {setPaymentTerms(e.target.value)}},)}
                    />
                    {errors?.paymentTerms?.type === "required" && (
                    <p className="error text-left">This field is required</p>
                    )}
                  </div>
                  <div className="flex flex-col mt-1">
                    <label htmlFor="wiring">Wiring:</label>
                    <textarea
                      type="text"
                      name="wiring"
                      id="wiring"
                      autoComplete="off"
                      value={wiring}
                      onChange={(e) => setWiring(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col mt-1">
                    <label htmlFor="warranty">Warranty:</label>
                    <input
                      type="text"
                      name="warranty"
                      id="warranty"
                      autoComplete="off"
                      value={warranty}
                      {...register("warranty", { required: true, onChange: (e) => {setWarranty(e.target.value)}},)}
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

                  <div className="flex flex-col mt-1">
                    <label htmlFor="notes">Notes:</label>
                    <textarea
                      type="text"
                      name="notes"
                      id="notes"
                      autoComplete="off"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
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
                      {...register("bankName", { required: true, onChange: (e) => {setBankName(e.target.value)}},)}
                    />
                    {errors?.bankName?.type === "required" && (
                    <p className="error text-left">This field is required</p>
                    )}
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="bankAccount">
                      Enter your bank account number
                    </label>
                    <input
                      type="text"
                      name="bankAccount"
                      id="bankAccount"
                      placeholder="Enter your bank account number"
                      autoComplete="off"
                      value={bankAccount}
                      {...register("bankAccount", { required: true, onChange: (e) => {setBankAccount(e.target.value)}},)}
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
                      {...register("preparedBy", { required: true, onChange: (e) => {setPreparedBy(e.target.value)}},)}
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
                      {...register("approvedBy", { required: true, onChange: (e) => {setApprovedBy(e.target.value)}},)}
                    />
                    {errors?.approvedBy?.type === "required" && (
                    <p className="error text-left">This field is required</p>
                    )}
                  </div>

                  <div className="d-flex justify-content-center align-items-end">
                    <button
                      type="submit"
                      className="submit-btn px-5 mt-1 bg-blue-500 text-white font-bold py-2 rounded shadow border-none hover:bg-blue-800 transition-all duration-300"
                    >
                      <span>Save</span>
                    </button>
                  </div>

                  <div className="d-flex justify-content-center align-items-end">
                    <button
                      onClick={() => setShowInvoice(true)}
                      className="preview px-2 py-2 bg-blue-500 text-white font-bold rounded shadow border-none hover:bg-blue-800 transition-all duration-300"
                    >
                      <span>Preview Template</span>
                    </button>
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

export default TemplatePage2;
