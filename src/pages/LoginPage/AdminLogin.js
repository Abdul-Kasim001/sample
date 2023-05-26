import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Loginpage.css";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Api from "../../Api";

function AdminLogin() {
  const [show, setShow] = useState(false);

  const [passwordShown, setpasswordShown] = useState(false);

  const handlePasswordShow = () => {
    setpasswordShown(!passwordShown);
  };

  const [resres, setResres] = useState({
    status: null,
    message: null,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    handleFormSubmit();
    setShow(true);
  };

  const navigate = useNavigate();
  useEffect(() => {
    datalist();
  }, []);

  const datalist = () => {};

  const handleFormSubmit = async () => {
    const userDetails = {
      role: "admin",
      email: getValues().email,
      password: getValues().password,
    };
    await Api.post(`admin/admin_login`, userDetails)
      .then((response) => {
        setResres({
          status: response.data?.status,
          message: response.data?.message,
        });
        if (response.data.token) {
          const token = response.data.token;
          const name = response.data.userName;
          const regid = response.data.data.RegistrationId;

          localStorage.setItem("USER_AUTH_STATE", true);
          localStorage.setItem("Role", "admin");
          localStorage.setItem("admin-token", token);
          localStorage.setItem("name", name);
          localStorage.setItem("regid", regid);

          navigate("/admin");
          sessionStorage.setItem("USER_AUTH_STATE", true);
        }
      })
      .catch((err) => {
        setResres({
          status: err?.response.data?.status,
          message: err?.response.data?.message,
        });
      });
  };

  return (
    <form>
    {/* <HeaderNavbar /> */}
      <ToastContainer
        className="bg-light"
        position="top-end"
        style={{ zIndex: 100000 }}
      >
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header>
            <strong
              className={`me-auto text-${ 
                resres?.status === "Success" ? "success" : "danger"
              }`}
            >
              {resres?.status}
            </strong>
          </Toast.Header>
          <Toast.Body>{resres?.message}</Toast.Body>
        </Toast>
      </ToastContainer>
      <div className="head">
        <div className="d-block justify-content-center">
          <div className="d-block justify-content-center align-items-center">
            <label className="mb-1">Email ID</label>
            <input
              className="input-fields"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <small className="p-error">Email is required</small>
            )}
          </div>
          <br />
          <div className="d-block justify-content-center align-items-center">
            <label className="mb-1">Password</label>
            <br />
            <input
              className="inputt"
              type={passwordShown ? "text" : "password"}
              {...register("password", { required: true })}
            />
            <FontAwesomeIcon
              icon={passwordShown ? faEye : faEyeSlash}
              onClick={() => handlePasswordShow()}
              size="5px"
              style={{
                cursor: "pointer",
                color: "black",
                marginLeft: "-25px",
              }}
            />
            {errors.password && (
              <small className="p-error">password is required</small>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <Button
            className="login-button"
            variant="primary"
            onClick={handleSubmit(onSubmit)}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AdminLogin;

