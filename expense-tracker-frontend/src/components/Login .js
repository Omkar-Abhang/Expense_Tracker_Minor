import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";


const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const sendOtp = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/send-otp`, { email });
      setIsOtpSent(true);
      setMessage("✅ OTP sent to your email.");
      setError("");
    } catch (err) {
      setError("❌ Failed to send OTP.");
      setMessage("");
      console.error(err);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/verify-otp`, { email, otp });
      const token = response.data.token;
      onLogin(token); // Pass token back to App
      navigate("/home");
    } catch (err) {
      setError("Invalid OTP");
    }
  };
  

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ minWidth: "350px" }}>
        <h3 className="text-center mb-4">🔐 Login with OTP</h3>

        {message && <div className="alert alert-success">{message}</div>}
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isOtpSent}
          />
        </div>

        {!isOtpSent && (
          <button className="btn btn-primary w-100 mb-3" onClick={sendOtp} disabled={!email}>
            Send OTP
          </button>
        )}

        {isOtpSent && (
          <>
            <div className="mb-3">
              <label>OTP</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <button className="btn btn-success w-100" onClick={verifyOtp}>
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
