import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Controller, useForm } from "react-hook-form";
import "../../component/Forms/Form.css";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import TableForm from "../../component/ProposalComponents/TableForm";
import { InputTextarea } from "primereact/inputtextarea";
import moment from "moment";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import ReactToPrint from "react-to-print";
import { Select } from "antd";
import Api from "../../Api";
import Header from "../../component/ProposalComponents/Header";

export default function Proposalpage() {
  const [discount, setDiscount] = useState("");
  const [note, setNote] = useState("");
  const [terms, setTerms] = useState("");
  const toast = useRef(null);

  const [subheader, setSubheader] = useState("");
  // const [description, setDescription] = useState("");
  const [productName, setProductName] = useState([]);

  const [quantity, setQuantity] = useState("");
  const [mrp, setMrp] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  console.log("total@@ :>> ", setTotal);
  const [discountvalue, setDiscountValue] = useState("");
  console.log("discountvalue :>> ", discountvalue);

  const [afterDiscount, setAfterDiscount] = useState("");
  console.log("afterDiscount :>> ", afterDiscount);
  const [gst, setGst] = useState(0);
  console.log("gst :>> ", gst);
  const [shipping, setShipping] = useState("");
  console.log("shipping :>> ", shipping);
  const [grandTotal, setGrandTotal] = useState("");
  console.log("grandTotal :>> ", grandTotal);

  const componentRef = useRef();

  const navigate = useNavigate();

  const [showProposal, setShowProposal] = useState(true);

  const {
    register,
    handleSubmit,
    control,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  console.log("getvaluessss", getValues());

  const [CustomerName, setCustomerName] = useState("");
  const [customerId, setCustomerSelectName] = useState([]);
  const [customerList, setCustomerList] = useState([]);
  // const [customeraddress, setCustomerAddress] = useState();
  // const [gstin, setGstin] = useState();
  const { Option } = Select;

  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = async () => {
    await Api.get(`addCustomer/getCustomer`).then((res) => {
      setCustomerList(res.data.data);
    });
  };

  const setCustomerData = async (e) => {
    await Api.post(`addCustomer/getoneCustomer`, { id: e }).then((res) => {
      console.log(res.data);
      setValue("customerName", res.data.data?.fullName);
      setValue("customerAddress", res.data.data?.addressWithPincode);
      setValue("gstin", res.data.data?.gstinDetails);
    });
  };

  const handleCreateFormSubmit = async () => {
    const createProposalDetails = {
      proposalNumber: getValues().proposalNumber,
      customerName: getValues().customerName,
      customerAddress: getValues().customerAddress,
      gstin: getValues().gstin,
      length: getValues().length,
      width: getValues().width,
      depth: getValues().depth,
      puropose: getValues().puropose,
      quotationTitle: getValues().quotationTitle,
      date: getValues().date,
      place: getValues().place,
      subTotal: getValues().subTotal,
      discountvalue: getValues().discountvalue,
      afterDiscount: getValues().afterDiscount,
      gst: getValues().gst,
      shipping: getValues().shipping,
      grandTotal: getValues().grandTotal,
      note: getValues().note,
      terms: getValues().terms,
    };
    await Api.post(`addProposal/createProposal`, createProposalDetails).then(
      (res) => {
        console.log("res.data", res.data);
        if (res.status === 200) {
          toast.success("Proposal Created Successfully!");
        }
        reset();
      }
    );
  };
  const onSubmit = (data) => console.log(data);

  const onDiscount = (e) => {
    console.log(discountvalue);
    setDiscount(e.value);
    if (e.value === "%") {
      setAfterDiscount(
        Number(total) - (Number(total) * Number(discountvalue)) / 100
      );
      console.log(setAfterDiscount);
    } else {
      setAfterDiscount(total - discountvalue);
      console.log(e.value);
    }
  };

  const onGstChange = (e) => {
    console.log(setGst);
    setGst(e.value);
    setGrandTotal(
      Number(afterDiscount) + (Number(afterDiscount) * Number(gst)) / 100
    );
  };

  const onShippingChange = (e) => {
    setShipping(e.value);
    setGrandTotal(Number(shipping) + grandTotal);
  };

  const Discountselect = [
    { label: "%", value: "%" },
    { label: "fixed", value: "fixed" },
  ];

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div>
      <div className="p-5 Form container-fluid">
        {showProposal ? (
          <Card className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
            <div className="pages-title mb-1">Add Proposal</div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row className="mt-1">
                <Col lg={4} className="pb-1">
                  <label className="input-title pe-5">Proposal Number</label>
                  <br />
                  <Controller
                    name="proposalNumber"
                    control={control}
                    rules={{ required: "This field is required." }}
                    render={({ field }) => (
                      <InputNumber
                        className="mt-1"
                        style={{
                          width: "95%",
                          borderRadius: "5px",
                          height: "37px",
                        }}
                        id={field.name}
                        ref={field.ref}
                        value={field.value}
                        onBlur={field.onBlur}
                        useGrouping={false}
                        onValueChange={(e) => field.onChange(e)}
                      />
                    )}
                  />
                  <br />
                  {getFormErrorMessage("proposalNumber")}
                </Col>
                <InputText
                  type="hidden"
                  name="customerName"
                  id="customerName"
                  value={CustomerName}
                  {...register("customerName", { required: true })}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    setValue("customerName", e);
                  }}
                />
                <Col lg={4} className="pb-1">
                  <label>Customer Name</label>
                  <br />
                  <Select
                    style={{ width: "95%" }}
                    className="create-select"
                    name="customerId"
                    {...register("customerId", { required: true })}
                    placeholder="Select a CustomerName"
                    onChange={(e) => {
                      setCustomerData(e);
                      setCustomerSelectName(e);
                      setValue("customerId", e);
                    }}
                  >
                    {customerList?.map((list, i) => {
                      return (
                        <Option value={list?._id} key={i}>
                          {list?.fullName}
                        </Option>
                      );
                    })}
                  </Select>
                  {customerId.length > 0
                    ? null
                    : errors.customerId && (
                        <small className="p-error">
                          Customer Name is required
                        </small>
                      )}
                </Col>
                <Col lg={4} className="pb-1">
                  <label className="input-title pe-5">Customer Address</label>
                  <br />
                  <InputTextarea
                    name="customerAddress"
                    id="customerAddress"
                    className="mt-1 input-text-area"
                    style={{ width: "95%" }}
                    {...register("customerAddress", { require: true })}
                  />
                  <br />
                </Col>
                <Col lg={4} className="pb-1">
                  <label className="input-title pe-5">Gstin</label>
                  <br />
                  <InputText
                    name="gstin"
                    id="gstin"
                    className="mt-1 Create-input"
                    style={{ width: "95%" }}
                    {...register("gstin", { required: true })}
                    // onChange= {(e) => setValue("gstin", e)}
                  />
                  <br />
                </Col>
                <Col lg={4} className="pb-1">
                  <label className="input-title pe-5">Length</label>
                  <br />
                  <Controller
                    name="length"
                    control={control}
                    rules={{ required: "Length Name is required." }}
                    render={({ field }) => (
                      <InputNumber
                        className="mt-1"
                        style={{
                          width: "95%",
                          borderRadius: "5px",
                          height: "37px",
                        }}
                        suffix={" feet"}
                        id={field.name}
                        ref={field.ref}
                        useGrouping={false}
                        value={field.value}
                        onBlur={field.onBlur}
                        onValueChange={(e) => field.onChange(e)}
                      />
                    )}
                  />
                  <br />
                  {getFormErrorMessage("length")}
                </Col>
                <Col lg={4} className="pb-1">
                  <label className="input-title pe-5">Width</label>
                  <br />
                  <Controller
                    name="width"
                    control={control}
                    rules={{ required: "Width Name is required." }}
                    render={({ field }) => (
                      <InputNumber
                        className="mt-1"
                        style={{
                          width: "95%",
                          borderRadius: "5px",
                          height: "37px",
                        }}
                        suffix={" feet"}
                        id={field.name}
                        ref={field.ref}
                        value={field.value}
                        useGrouping={false}
                        onBlur={field.onBlur}
                        onValueChange={(e) => field.onChange(e)}
                      />
                    )}
                  />
                  <br />
                  {getFormErrorMessage("width")}
                </Col>
                <Col lg={4} className="pb-1">
                  <label className="input-title pe-5">Depth</label>
                  <br />
                  <Controller
                    name="depth"
                    control={control}
                    rules={{ required: "Depth Name is required." }}
                    render={({ field }) => (
                      <InputNumber
                        className="mt-1"
                        style={{
                          width: "95%",
                          borderRadius: "5px",
                          height: "37px",
                        }}
                        suffix={" feet"}
                        id={field.name}
                        ref={field.ref}
                        useGrouping={false}
                        value={field.value}
                        onBlur={field.onBlur}
                        onValueChange={(e) => field.onChange(e)}
                      />
                    )}
                  />
                  <br />
                  {getFormErrorMessage("depth")}
                </Col>

                <Col lg={4} className="pb-1">
                  <label className="input-title pe-5">
                    Purpose of this solution
                  </label>
                  <br />
                  <InputText
                    className="mt-1 Create-input"
                    style={{ height: "37px", width: "95%" }}
                    {...register("puropose", {
                      required: true,
                    })}
                  />
                  <br />
                  {errors?.puropose?.type === "required" && (
                    <small className="p-error">This field is required</small>
                  )}
                </Col>
                <Col lg={4} className="pb-1">
                  <label className="input-title pe-5">Quotation Title</label>
                  <br />
                  <InputText
                    className="mt-1 Create-input"
                    style={{ height: "37px", width: "95%" }}
                    {...register("quatationTitle", {
                      required: true,
                    })}
                  />
                  <br />
                  {errors?.quatationTitle?.type === "required" && (
                    <small className="p-error">This field is required</small>
                  )}
                </Col>
              </Row>
              <Row className="mt-2">
                <Col lg={4} className="pb-1">
                  <label className="input-title pe-5 pb-2">Date</label>
                  <Controller
                    name="date"
                    control={control}
                    rules={{ required: "Date is required." }}
                    render={({ field }) => (
                      <DatePicker
                        className="mt-1"
                        placeholder="01/04/2023"
                        format="DD/MM/YYYY"
                        style={{ height: "37px", width: "95%" }}
                        id={field.name}
                        ref={field.ref}
                        value={field.value}
                        onBlur={field.onBlur}
                        onChange={(e) => field.onChange(e)}
                        showButtonBar
                      />
                    )}
                  />
                  <br />
                  {getFormErrorMessage("date")}
                </Col>
                <Col lg={4} className="pb-1">
                  <label className="input-title pe-5 pb-2">Place</label>
                  <InputText
                    className="Create-input mt-1"
                    style={{ height: "37px", width: "95%" }}
                    {...register("place", {
                      required: true,
                    })}
                  />
                  <br />
                  {errors?.place?.type === "required" && (
                    <small className="p-error">This field is required</small>
                  )}
                </Col>
              </Row>

              <Row className="mt-3">
                <div>
                  <div className="heading-div">
                    <span className="form-heading-fields">Table Fields</span>
                  </div>
                  <TableForm
                    subheader={subheader}
                    setSubheader={setSubheader}
                    description={productName}
                    setDescription={setProductName}
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
                </div>
              </Row>
              <Row>
                <Col className="mt-2" lg={4}>
                  <label htmlFor="subtotal" className="input-title pe-5 pb-1">
                    subTotal
                  </label>
                  <InputNumber
                    type="text"
                    id="subTotal"
                    name="subTotal"
                    className="mt-1 input-number"
                    minFractionDigits={2}
                    maxFractionDigits={5}
                    value={total}
                    {...register("subTotal", {
                      required: true,
                    })}
                    onChange={(e) => setTotal(e.value)}
                    disabled
                  />
                </Col>
                <Col className="mt-2" lg={4}>
                  <label htmlFor="discount" className="input-title pe-5 pb-1">
                    Discount {"(-)"}
                  </label>
                  <div className="d-flex align-items-center">
                    <InputNumber
                      type="text"
                      id="discountvalue"
                      useGrouping={false}
                      value={discountvalue}
                      {...register("discountValue", {
                        required: true,
                      })}
                      onValueChange={(e) => setDiscountValue(e.target.value)}
                      style={{ width: "70%", height: "37px" }}
                      className="Create-discount mt-1"
                    />
                    <div className="mx-2">
                      <Dropdown
                        style={{ height: "37px", width: "100%" }}
                        name="discountType"
                        placeholder="%"
                        className="align-items-center mt-1"
                        value={discount}
                        {...register("discountType", {
                          required: true,
                        })}
                        options={Discountselect}
                        onChange={onDiscount}
                      />
                    </div>
                  </div>
                </Col>
                <Col className="mt-2" lg={4}>
                  <label className="input-title pe-5 pb-1">
                    After Discount
                  </label>
                  <InputNumber
                    id="afterDiscount"
                    type="text"
                    className="mt-1 input-number"
                    value={afterDiscount}
                    onChange={(e) => setAfterDiscount(e.target.value)}
                    disabled
                    {...register("afterDiscount", {
                      required: true,
                    })}
                    minFractionDigits={2}
                    maxFractionDigits={5}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="mt-2" lg={4}>
                  <label className="input-title pe-5 pb-1">Gst</label>
                  <InputNumber
                    // type="text"
                    className="mt-1 input-number"
                    minDigits={3}
                    suffix=" %"
                    value={gst}
                    {...register("gst", { required: true })}
                    onValueChange={onGstChange}
                    useGrouping={false}
                  />
                </Col>
                <Col className="mt-2" lg={4}>
                  <label className="input-title pe-5 pb-1">
                    Shipping Other (+)
                  </label>
                  <InputNumber
                    type="text"
                    className="mt-1 input-number"
                    minFractionDigits={2}
                    maxFractionDigits={5}
                    useGrouping={false}
                    {...register("shipping", {
                      required: true,
                    })}
                    value={shipping}
                    onChange={onShippingChange}
                  />
                </Col>
                <Col className="mt-2" lg={4}>
                  <label className="input-title pe-5 pb-1">Grand Total</label>
                  <InputNumber
                    type="text"
                    className="mt-1 input-number"
                    value={grandTotal}
                    {...register("grandTotal", {
                      required: true,
                    })}
                    onValueChange={(e) => setGrandTotal(e.target.value)}
                    minFractionDigits={2}
                    disabled
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="input-title pe-5 pb-1">
                    Additional Note
                  </label>
                  <br />
                  <InputTextarea
                    placeholder="Additional Note"
                    className="mt-1"
                    style={{ width: "98%" }}
                    value={note}
                    cols={114}
                    {...register("note", {
                      required: true,
                      onChange: (e) => {
                        setNote(e.target.value);
                      },
                    })}
                  />
                  <br />
                  {errors.note && (
                    <small className="p-error">Note is required</small>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="input-title pe-5 pb-1">
                    Terms & Conditions
                  </label>
                  <br />
                  <InputTextarea
                    placeholder="Terms & Conditions"
                    className="mt-1"
                    style={{ width: "98%" }}
                    value={terms}
                    cols={114}
                    {...register("terms", {
                      required: true,
                      onChange: (e) => {
                        setTerms(e.target.value);
                      },
                    })}
                  />
                  <br />
                  {errors.terms && (
                    <small className="p-error">
                      Terms & Conditions is required
                    </small>
                  )}
                </Col>
              </Row>
              <div className="submitbuttons d-flex justify-content-start p-2">
                <Button
                  className="form-button p-button-sm px-4 m-2"
                  type="submit"
                  onClick={handleSubmit(handleCreateFormSubmit)}
                >
                  Save
                </Button>
                <Button
                  className="form-button px-4 p-button-success p-button-sm m-2"
                  type="button"
                  onClick={() => setShowProposal(false)}
                >
                  Preview
                </Button>
                <Button
                  className="form-button px-4 p-button-secondary p-button-sm m-2"
                  type="reset"
                >
                  Reset
                </Button>
              </div>
            </form>
          </Card>
        ) : (
          <div className="mt-3 bg-white mb-3 mx-4 py-4">
            <div
              className="mt-3 px-4 xl:grid grid-cols xl:items-start bg-white py-4"
              ref={componentRef}
            >
              <Header />
              {/* <CustomerDetails /> */}
            </div>
            <div className="print-btn">
              <Button
                className="p-button p-button-success d-felx justify-content-center align-items-center"
                onClick={() => setShowProposal(true)}
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
        )}
      </div>
    </div>
  );
}
