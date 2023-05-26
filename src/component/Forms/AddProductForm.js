import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import "./Form.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button"; 
import { InputNumber } from "primereact/inputnumber";
import { classNames } from "primereact/utils";
import Api from "../../Api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddProductForm() {
  const {
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName:'',
      description:''
    },
  });
  console.log("getvaluessss", getValues());

  const onSubmit = (data) => {
    console.log(data);
    // const stroageRef = app.stroage().ref();
    // const fileRef = stroageRef.child(data.productImage[0].name)
    // fileRef.put(data.productImage[0].then(() => {
    //   console.log("uploaded a file");
    // }))
  };


  // const [uploadedPhotos, setUploadedPhotos] = useState([]);
  // const [photoPreview, setPhotoPreview] = useState([]);


  // const handleUpload =(e) =>{
  //   console.log(typeof e.target.files);
  //   const files = e.target.files[0];
  //   setUploadedPhotos([...uploadedPhotos, files]);
  //   setPhotoPreview(
  //     uploadedPhotos.map((photo) =>
  //       Object.assign(photo, {
  //         preview: URL.createObjectURL(photo)
  //       })
  //     )
  //   );
  //   console.log(files);
  // }

 

  const handleCreateFormSubmit = async () => {
    const CreateProductDetails = {
      productName:getValues().productName,
      price:getValues().price,
      description:getValues().description,
      cgst:getValues().cgst,
      igst:getValues().igst,
      sgst:getValues().sgst,
      vat:getValues().vat,
      productImage:getValues().productImage
    };

    console.log("CreateProductDetails", CreateProductDetails);

    await Api.post(`addProduct/createProduct`,CreateProductDetails).then((resp)=>{
      console.log("resp.data", resp.data);
        if (resp.status === 200)
          toast.success("Product Created Successfully!");       
          reset();
    });
  }

  const getFormErrorMessage = (name) => {
    return (
      errors[name] && <small className="p-error">{errors[name].message}</small>
    );
  };


  return (
    <div className="p-5 Form container-fluid">
    <ToastContainer/>
      <Card className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <div className="pages-title mb-1">Add Product</div>
        <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
          <Row>
            <Col className="mt-2" lg={4}>
              <label
                htmlFor="productName"
                className={classNames({ "p-error": errors.productName })}
              >
                Product Name
              </label>
              <Controller
                name="productName"
                control={control}
                rules={{ required: "Product Name is required." }}
                render={({ field, fieldState }) => (
                  <InputText
                    style={{width:'95%', borderRadius:'5px', height:'37px'}}
                    id={field.name}
                    ref={field.ref}
                    value={field.value}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    className={classNames({ "p-invalid": fieldState.invalid })}
                  />
                )}
              />
              <br />
              {getFormErrorMessage("productName")}
            </Col>
            <Col className="mt-2" lg={4}>
              <label
                htmlFor="price"
                className={classNames({ "p-error": errors.price })}
              >
                Price
              </label>
              <br />
              <Controller
                name="price"
                control={control}
                rules={{ required: "Price is required.", min: 0, max: 250000 }}
                render={({ field, fieldState }) => (
                  <InputNumber
                    className="Create-inputnumber"
                    id={field.name}
                    ref={field.ref}
                    value={field.value}
                    onBlur={field.onBlur}
                    onValueChange={(e) => field.onChange(e)}
                    mode="currency"
                    currency="INR"
                    currencyDisplay="code"
                    locale="en-IN"
                    inputClassName={classNames({
                      "p-invalid": fieldState.invalid,
                    })}
                  />
                )}
              />
              {getFormErrorMessage("price")}
            </Col>
            <br />
            <Col className="mt-2" lg={4}>
            <label
                htmlFor="description"
                className={classNames({ "p-error": errors.description })}
              >
                Description
              </label>
              <Controller
                name="description"
                // defaultValue=""
                control={control}
                rules={{ required: "Description is required." }}
                render={({ field, fieldState }) => (
                  <InputText
                    style={{width:'95%', borderRadius:'5px', height:'37px'}}
                    id={field.name}
                    ref={field.ref}
                    value={field.value}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    className={classNames({ "p-invalid": fieldState.invalid })}
                  />
                )}
              />
              <br />
              {getFormErrorMessage("description")}
            </Col>
          </Row>
          <Row>
            <Col className="mt-1" lg={4}>
              <label
                htmlFor="cgst"
                className={classNames({ "p-error": errors.cgst})}
              >
                CGST
              </label>
              <br />
              <Controller
                name="cgst"
                control={control}
                rules={{ required: "CGST is required.", min: 0, max: 250000 }}
                render={({ field, fieldState }) => (
                  <InputNumber
                    className="Create-inputnumber"
                    id={field.name}
                    ref={field.ref}
                    value={field.value}
                    onBlur={field.onBlur}
                    onValueChange={(e) => field.onChange(e)}
                    suffix=" %"
                      inputClassName={classNames({
                        "p-invalid": fieldState.error,
                      })}
                  />
                )}
              />
              {getFormErrorMessage("cgst")}
            </Col>
            <Col className="mt-1" lg={4}>
              <label
                htmlFor="igst"
                className={classNames({ "p-error": errors.igst})}
              >
                IGST
              </label>
              <br />
              <Controller
                name="igst"
                control={control}
                rules={{ required: "IGST is required.", min: 0, max: 250000 }}
                render={({ field, fieldState }) => (
                  <InputNumber
                    className="Create-inputnumber"
                    id={field.name}
                    ref={field.ref}
                    value={field.value}
                    onBlur={field.onBlur}
                    onValueChange={(e) => field.onChange(e)}
                    suffix=" %"
                      inputClassName={classNames({
                        "p-invalid": fieldState.error,
                      })}
                  />
                )}
              />
              {getFormErrorMessage("igst")}
            </Col>
            <Col className="mt-1" lg={4}>
              <label
                htmlFor="sgst"
                className={classNames({ "p-error": errors.sgst})}
              >
                SGST
              </label>
              <br />
              <Controller
                name="sgst"
                control={control}
                rules={{ required: "SGST is required.", min: 0, max: 250000 }}
                render={({ field, fieldState }) => (
                  <InputNumber
                    className="Create-inputnumber"
                    id={field.name}
                    ref={field.ref}
                    value={field.value}
                    onBlur={field.onBlur}
                    onValueChange={(e) => field.onChange(e)}
                    suffix=" %"
                      inputClassName={classNames({
                        "p-invalid": fieldState.error,
                      })}
                  />
                )}
              />
              {getFormErrorMessage("sgst")}
            </Col>
          </Row>
          <Row className="mt-3">
          <Col className="mt-1" lg={4}>
              <label
                htmlFor="vat"
                className={classNames({ "p-error": errors.vat})}
              >
                VAT
              </label>
              <br />
              <Controller
                name="vat"
                control={control}
                rules={{ required: "VAT is required.", min: 0, max: 250000 }}
                render={({ field, fieldState }) => (
                  <InputNumber
                    className="Create-inputnumber"
                    id={field.name}
                    ref={field.ref}
                    value={field.value}
                    onBlur={field.onBlur}
                    onValueChange={(e) => field.onChange(e)}
                    suffix=" %"
                      inputClassName={classNames({
                        "p-invalid": fieldState.error,
                      })}
                  />
                )}
              />
              <br/>
              {getFormErrorMessage("vat")}
            </Col>
            <Col className="mt-1" lg={4}>
              <label
                htmlFor="productImage"
                className={classNames({ "p-error": errors.productImage })}
              >
                Product Image
              </label>
              <br/> 
              <Controller
                name="productImage"
                register
                defaultValue={""}
                control={control}
                rules={{ required: "productImage is required." }}
                render={({ field, fieldState }) => (
                  <input type='file'
                    id={field.name}
                    ref={field.register}
                    value={field.value}
                    onBlur={field.onBlur}
                    autoFocus
                    onChange={field.onChange}
                    inputClassName={classNames({
                        "p-invalid": fieldState.error,
                      })}
                  />
                )}
              />
              <br />
              {getFormErrorMessage("productImage")}
          </Col>
          </Row>
         
          <div className="submitbuttons d-flex justify-content-start p-2">
            <Button
              className="form-button p-button p-button-sm m-2"
              type="submit"
              onClick={handleSubmit(handleCreateFormSubmit)}
            >
              Submit
            </Button>
            <Button
              className="form-button p-button-secondary p-button-sm m-2"
              type="reset"
              onClick={reset}
            >
              Reset
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default AddProductForm;
