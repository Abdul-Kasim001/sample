import React, { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import "./Form.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Dropdown } from "primereact/dropdown";
import { classNames } from "primereact/utils";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";

function AddUserForm() {
  const navigate = useNavigate();

  const [resres, setResres] = useState({
    status: null,
    message: null,
  });

  const [details, setDetails] = useState("");

  const defaultValues = {
    username: "",
    email: "",
    password: "",
    cnfpassword: "",
    role: "",
  };
  const {
    register,
    control,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues });
  console.log("getvaluessss", getValues());

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    addDatalist();
  }, []);

  const addDatalist = () => {
    Api.get(`addUser/getUser`).then((resp) => {
      setDetails(resp.data.data);
    });
  };

  const handleCreateFormSubmit = async () => {
    const CreateUserDetails = {
      username: getValues().username,
      email: getValues().email,
      password: getValues().password,
      cnfpassword: getValues().cnfpassword,
      role: getValues().role.name,
    };

    console.log("CreateUserDetails", CreateUserDetails);

    await Api.post(`addUser/createUser`, CreateUserDetails)
      .then((resp) => {
        setResres({
          status: resp.data?.status,
          message: resp.data?.toast.success("User Created Successfully!"),
        });
        localStorage.setItem("userId", resp.data.data._id);
        setTimeout(() => {
          navigate("/");
        }, 10000);
        reset();
      })
      .catch((err) => {
        setResres({
          status: err?.response.data?.status,
          message: toast.error("User alreay exist!"),
        });
      });
  };

  const role = [
    { name: "User", code: "US" },
    { name: "Employer", code: "EMP" },
  ];

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="p-5 Form container-fluid">
      <ToastContainer />
      <Card className="surface-0 shadow-2 p-3 border-1 border-50 border-round">
        <div className="pages-title mb-1">Add User</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col className="mt-2" lg={4}>
              <label htmlFor="username" className="input-title pe-5">
                User Name
              </label>
              <InputText
                // autoComplete="off"
                style={{ width: "100%", outline: "none" }}
                className="mt-1 Create-input"
                {...register("username", {
                  required: true,
                })}
              />
              {errors?.username?.type === "required" && (
                <small className="p-error">This field is required</small>
              )}
            </Col>
            <Col className="mt-2" lg={4}>
              <label htmlFor="email" className="input-title pe-5">
                Email Address
              </label>
              <InputText
                autoComplete="off"
                style={{ width: "100%", outline: "none" }}
                className="mt-1 Create-input"
                {...register("email", {
                  required: true,
                  pattern: /[A-Za-z]{3}/,
                })}
              />
              {errors?.email?.type === "required" && (
                <small className="p-error">This field is required</small>
              )}
            </Col>
            <br />
            <Col className="mt-2" lg={4}>
              <label htmlFor="password" className="input-title pe-5">
                Password
              </label>
              <Controller
                name="password"
                defaultValues
                control={control}
                rules={{ required: "password is required." }}
                render={({ field, fieldState }) => (
                  <Password
                    style={{
                      borderRadius: "5px",
                      height: "37px",
                      outline: "none",
                      marginTop: "0.25rem",
                      width: "95%",
                    }}
                    // autoComplete="off"
                    value={field.value}
                    toggleMask
                    name="password"
                    control={control}
                    onChange={(e) => field.onChange(e.target.value)}
                    className={classNames({ "p-invalid": fieldState.error })}
                  />
                )}
              />
              <br />
              {getFormErrorMessage("password")}
            </Col>
            <Col className="mt-2" lg={4}>
              <label htmlFor="cnfpassword" className="input-title pe-5">
                Confirmation Password
              </label>
              <Controller
                name="cnfpassword"
                control={control}
                autoComplete="off"
                rules={{ required: "confirm password is required." }}
                render={({ field, fieldState }) => (
                  <Password
                    style={{
                      borderRadius: "5px",
                      height: "37px",
                      outline: "none",
                      marginTop: "0.25rem",
                      width: "95%",
                    }}
                    value={field.value}
                    toggleMask
                    name="cnfpassword"
                    control={control}
                    onChange={(e) => field.onChange(e.target.value)}
                    className={classNames({ "p-invalid": fieldState.error })}
                  />
                )}
              />
              <br />
              {getFormErrorMessage("cnfpassword")}
            </Col>
            <Col className="mt-2" lg={4}>
              <label className="input-title pe-5">User Role</label>
              <br />
              <Controller
                name="role"
                control={control}
                rules={{ required: "User Role is required." }}
                render={({ field, fieldState }) => (
                  <Dropdown
                    style={{
                      borderRadius: "5px",
                      height: "37px",
                      outline: "none",
                      marginTop: "0.25rem",
                      width: "95%",
                    }}
                    autoComplete="off"
                    value={field.value}
                    optionLabel="name"
                    placeholder="Select a Role"
                    options={role}
                    onChange={(e) => field.onChange(e.value)}
                    className={classNames({ "p-invalid": fieldState.error })}
                  />
                )}
              />
              <br />
              {getFormErrorMessage("role")}
            </Col>
          </Row>
          <div className="submitbuttons d-flex justify-content-start p-2">
            <Button
              className="form-button p-button-sm m-2"
              type="submit"
              onClick={handleSubmit(handleCreateFormSubmit)}
            >
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

export default AddUserForm;
