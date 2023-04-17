import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import "../style/login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const AdminLogin = () => {
  // const [userId, setuserId] = useState("")

  const history = useNavigate();

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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    console.log(userData);
    try {
      const response = await axios.post(
        "http://10.8.10.149:3000/user/login",
        userData
      );
      console.log(response.data);
      // setuserId(response.data.data[0])
      resetForm();
      toast.success("Login Successfully", {
        position: "bottom-left",
      });
      history("/admin/dashboard");
    } catch (error) {
      console.error(error);
      toast.error(`${error}`, { position: "bottom-left" });
    }
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
            <h1>Login</h1>
            <p>
              Are you admin? <br />
              It takes only few steps to login
            </p>
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
              <Link to="/signup">
                Click Me
              </Link>
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

export default AdminLogin;
