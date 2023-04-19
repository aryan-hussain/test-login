import React, {useEffect} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import "../style/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { useSigninUserMutation } from "../slices/authApi.ts";
import { useDispatch } from "react-redux";
import { setUser } from "../slices/authStoreSlice.ts";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  useEffect(()=>{},[history])

  const [signinUser, { data, isLoading, error, isError, isSuccess }] = useSigninUserMutation();

  console.log(data);
  
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  if (isError) {
    toast.error(`OOPS: ${error.error}`, {
      position: "bottom-left",
    });
    console.log(error);  
  }
  if (isSuccess) {
    dispatch(setUser({ token: data.token, name: data.name }));
    history("/home");
    localStorage.setItem("token", data.token);
    toast.success("Succesfully Login", {
      position: "bottom-left",
    });
  }

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    signinUser(userData);
    console.log(userData);
  };

  return (
    <section id="signin">
      <div className="signin d-f">
        <div className="si-l d-f j-c-c ">
          <div className="form">
            <img
              src="https://www.bootstrapdash.com/demo/skydash/template/images/logo.svg"
              alt=""
            />
            <h1>Log in</h1>
            {/* <p>
              New here? Join us today! <br />
              It takes only few steps
            </p> */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="si-labels">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="si-labels">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" />
                  </div>

                  <button type="submit" disabled={isSubmitting}>
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            <p>
              Not have account? Create new account
              <Link to="/signup">Click Me</Link>
            </p>
          </div>
        </div>
        <div className="si-r d-f j-c-c">
          <p>Copyright © 2021 All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ErrorMessagex = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export default LoginForm;
