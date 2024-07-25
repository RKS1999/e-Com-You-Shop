import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userAxiosInstance } from "../API/axiosInstance";
import { endPoint } from "../API/EndPoints";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userAxiosInstance.post(endPoint.login, {
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(response.data));
      navigate("/profile");
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container-fluid">
      <div className="container mt-3 p-1">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <Link to="/signup" className="btn btn-link">
            Sign Up
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
