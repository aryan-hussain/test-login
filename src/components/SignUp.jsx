import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import "../style/signup.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const history = useNavigate();
  const initialValues = {
    // name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  };

  const validationSchema = Yup.object().shape({
    // name: Yup.string().required("Name is required"),
    username: Yup.string().required("* Username is required"),
    email: Yup.string().email("Invalid email").required("* Email is required"),
    password: Yup.string()
      .required("* Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "* Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .min(6, "* Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "* Passwords must match")
      .matches(
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        " *Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
      )
      .required("* Confirm Password is required"),
    phoneNumber: Yup.string()
      .required("* Phone Number is required")
      .matches(/^\d{10}$/, "* Phone number must be number and have exactly 10 digits"),
    address: Yup.string().required("* Address is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const userData = {
      // name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      phonenumber: values.phoneNumber,
      confirmPassword: values.confirmPassword,
      // address: values.address,
    };
    console.log(userData);
    try {
      const response = await axios.post(
        "http://10.8.10.40:5000/user/signup",
        userData
      );
      console.log(response.data);
      resetForm();
      toast.success("Login Successfully", {
        position: "bottom-left",
      });
      history("/login");
    } catch (error) {
      console.error(error);
      toast.error(`${error}`, { position: "bottom-left" });
    }
  };

  return (
    <section id="signup">
      <div className="signup d-f">
        <div className="su-l d-f j-c-c a-i-c">
          <div className="form">
            <img
              src="https://www.bootstrapdash.com/demo/skydash/template/images/logo.svg"
              alt=""
            />

            <p>
              New here? Join us today! <br />
              It takes only few steps
            </p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="su-labels">
                    <label htmlFor="username">Username</label>
                    <div className="error-div">
                      <Field
                        type="text"
                        name="username"
                        placeholder="Username"
                      />
                      <ErrorMessage component={ErrorMsg} name="username" />
                    </div>
                  </div>
                  <div className="su-labels">
                    <label htmlFor="email">Email</label>
                    <div className="error-div">
                      <Field type="email" name="email" placeholder="Email" />
                      <ErrorMessage component={ErrorMsg} name="email" />
                    </div>
                  </div>
                  <div className="su-labels">
                    <label htmlFor="password">Password</label>
                    <div className="error-div">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                      />
                      <ErrorMessage component={ErrorMsg} name="password" />
                    </div>
                  </div>
                  <div className="su-labels">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <div className="error-div">
                      <Field
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                      />
                      <ErrorMessage
                        component={ErrorMsg}
                        name="confirmPassword"
                      />
                    </div>
                  </div>
                  <div className="su-labels">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <div className="error-div">
                      <Field
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                      />
                      <ErrorMessage component={ErrorMsg} name="phoneNumber" />
                    </div>
                  </div>
                  <div className="su-labels">
                    <label htmlFor="address">Address</label>
                    <div className="error-div">
                      <Field type="text" name="address" placeholder="Address" />
                      <ErrorMessage component={ErrorMsg} name="address" />
                    </div>
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
            <p>
              Already account?{" "}
              <Link to="/login">
                <a href="">Login</a>
              </Link>{" "}
            </p>
          </div>
        </div>
        <div className="su-r d-f j-c-c">
          <p>Copyright © 2021 All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

const ErrorMsg = styled.div`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  // position: absolute;
  // top: 28px;
  // left: 0px;
`;

export default SignupForm;
