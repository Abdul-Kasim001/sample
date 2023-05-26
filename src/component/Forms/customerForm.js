import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Form.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import Api from "../../Api";
import { ToastContainer, toast } from 'react-toastify';

function Customerform() {
  const defaultValues={
      fullName:"",
      addressWithPincode:"",
      landLine:"",
      mobile:"",
      whatsappNumber:"",
      email:"",
      gstinDetails:""
  }
  const {
    register,
    reset,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({defaultValues});

  const onSubmit = (data, e) => {
    console.log(data)
    reset();
    e.target.defaultValues();
  }

  const handleCreateFormSubmit = async () => {
    const CreateCustomerDetails = {
      fullName:getValues().fullName,
      addressWithPincode:getValues().addressWithPincode,
      landLine:getValues().landLine,
      mobile:getValues().mobile,
      whatsappNumber:getValues().whatsappNumber,
      email:getValues().email,
      gstinDetails:getValues().gstinDetails
    };

    console.log("CreateCustomerDetails", CreateCustomerDetails);

    await Api.post(`addCustomer/createCustomer`,CreateCustomerDetails).then((resp)=>{
      console.log("resp.data", resp.data);
          if (resp.status === 200){
            toast.success("Customer Created Successfully!");   
          }    
          reset();
    });
  }

  return (
    <div className="p-5 Form container-fluid">
    <ToastContainer/>
      <Card className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <div className="pages-title mb-1">Add Customer</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mt-2">
            <Col lg={4}>
              <label className="input-title pe-5">Full Name</label>
              <br />
              <InputText
                name="fullName"
                type="text"
                autoComplete="off"
                style={{ width: "100%", outline: "none" }}
                className="mt-1 Create-input"
                {...register("fullName", {
                  required: true,
                })}
              />
              <br />
              {errors?.fullName?.type === "required" && (
                <p className="error">This field is required</p>
              )}
            </Col>
            <br />
            <Col lg={4}>
              <label className="input-title pe-5">
                Address With pincode
              </label>
              <br />
              <InputText
                name="addressWithPincode"
                type="text"
                autoComplete="off"
                style={{ width: "100%", outline: "none" }}
                className="mt-1 Create-input"
                {...register("addressWithPincode", { required: true })}
              />
              <br />
              {errors?.addressWithPincode?.type === "required" && (
                <p className="error">Address is required</p>
              )}
            </Col>
            <br />
            <Col lg={4}>
              <label className="input-title pe-5">Landline</label>
              <br />
              <InputText
                name="landLine"
                maxlength="10"
                type="text"
                autoComplete="off"
                style={{ width: "100%", outline: "none" }}
                className="mt-1 Create-input"
                {...register("landLine", { required: true })}
              />
              <br />
              {errors?.landLine?.type === "required" && (
                <p className="error">Landline is required</p>
              )}
            </Col>
            <br />
          </Row>
          <Row className="mt-2">
            <Col lg={4}>
              <label className="input-title pe-5">Mobile</label>
              <br />
              <InputText
                name="mobile"
                maxlength="10"
                type="text"
                autoComplete="off"
                style={{ width: "100%", outline: "none" }}
                className="mt-1 Create-input"
                {...register("mobile", { required: true })}
              />
              <br />
              {errors?.mobile?.type === "required" && <p className="error">Mobile is required</p>}
            </Col>
            <br />
            <Col lg={4}>
              <label className="input-title pe-5">Whatsapp Number</label>
              <br />
              <InputText
                maxlength="10"
                name="whatsappNumber"
                type="text"
                autoComplete="off"
                style={{ width: "100%", outline: "none" }}
                className="mt-1 Create-input"
                {...register("whatsappNumber", { required: true })}
              />
              <br />
              {errors?.whatsappNumber?.type === "required" && (
                <p className="error">whatsapp Number is required</p>
              )}
            </Col>
            <br />
            <Col lg={4}>
              <label className="input-title pe-5">Email</label>
              <br />
              <InputText
                name="email"
                type="email"
                autoComplete="off"
                style={{ width: "100%", outline: "none" }}
                className="mt-1 Create-input"
                {...register("email", { required: true, pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format"
                } })}
              />
              <br />
              {errors?.email?.type === "required" && <p className="error">Email is required</p>}
            </Col>
            <br />
          </Row>
          <Row className="mt-2">
            <Col lg={8}>
              <label className="input-title pe-5">GSTIN Details</label>
              <br />
              <InputText
                name="gstinDetails"
                type="text"
                autoComplete="off"
                style={{ width: "100%", outline: "none" }}
                className="mt-1 Create-input"
                {...register("gstinDetails", { required: true })}
              />
              <br />
              {errors?.gstinDetails?.type === "required" && (
                <p className="error">Gst Number is required</p>
              )}
            </Col>
            <br />
          </Row>
          <div className="submitbuttons d-flex justify-content-start p-2">
            <Button className="form-button p-button-sm m-2" type="submit" onClick={handleSubmit(handleCreateFormSubmit)}>
              Submit
            </Button>
            <Button
              className="form-button p-button-secondary p-button-sm m-2"
              type="reset"
            >
              Reset
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Customerform;