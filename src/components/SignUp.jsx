import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";
import "../style/signup.css";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    address: Yup.string().required("Address is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const userData = {
      // name: values.name,
      username: values.username,
      email: values.email,
      password: values.password,
      phonenumber: values.phoneNumber,
      address: values.address,
    };
    console.log(userData);
    try {
      const response = await axios.post("http://10.8.10.40:5000/user/signup", userData,{
        headers:{
          'Content-Type': "applications/json"
        }
      });
      console.log(response.data);
      resetForm();
    } catch (error) {
      console.error(error);
    } 
  };

  return (
    <section id="signup">
      <div className="signup d-f">
        <div className="su-l d-f j-c-c a-i-c">
          <div className="form">
            <img src="https://www.bootstrapdash.com/demo/skydash/template/images/logo.svg" alt="" />
            <h1>Sign Up</h1>
            <p>New here? Join us today! <br />It takes only few steps</p>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="su-labels">
                    <label htmlFor="name">Name</label>
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage name="name" />
                  </div>
                  <div className="su-labels">
                    <label htmlFor="username">Username</label>
                    <Field type="text" name="username" placeholder="Username" />
                    <ErrorMessage name="username" />
                  </div>
                  <div className="su-labels">
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" placeholder="Email" />
                    <ErrorMessage name="email" />
                  </div>
                  <div className="su-labels">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <ErrorMessage name="password" />
                  </div>
                  <div className="su-labels">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                    />
                    <ErrorMessage name="confirmPassword" />
                  </div>
                  <div className="su-labels">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                    />
                    <ErrorMessage name="phoneNumber" />
                  </div>
                  <div className="su-labels">
                    <label htmlFor="address">Address</label>
                    <Field type="text" name="address" placeholder="Address" />
                    <ErrorMessage name="address" />
                  </div>
                  <button type="submit" disabled={isSubmitting}>
                    Submit
                  </button>
                </Form>
                
              )}
            </Formik>
            <p>Already account? <Link to="/login"><a href="">Login</a></Link> </p>
          </div>
        </div>
        <div className="su-r d-f j-c-c">
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 30px;
`;

const FormTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Input = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const ErrorMessagex = styled(ErrorMessage)`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0069d9;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default SignupForm;