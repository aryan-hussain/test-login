import React from "react";
import { useState } from "react";
import { useSignUpMutation } from "../slices/signUp";

const SignUp2 = () => {
  const [signUp, { isLoading, isSuccess, error }] = useSignUpMutation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signUp(formData)
      .unwrap()
      .then((data) => {
        localStorage.setItem("token", data.token);
        // Redirect to logged-in page
      });
  };
  return (

      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Sign up"}
        </button>
        {error && <p>Error: {error.message}</p>}
        {isSuccess && <p>Success! You are now signed up.</p>}
      </form>
    
  );
};

export default SignUp2;
