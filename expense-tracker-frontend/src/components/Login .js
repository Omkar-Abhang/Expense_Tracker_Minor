import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const sendOtp = async () => {
    try {
      await axios.post("http://localhost:8080/api/auth/send-otp", { email });
      setIsOtpSent(true);
    } catch (error) {
      console.error("❌ Error sending OTP:", error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/verify-otp", { email, otp });
      localStorage.setItem("token", response.data.token);
      onLogin();
    } catch (error) {
      console.error("❌ Error verifying OTP:", error);
    }
  };

  return (
    <div>
      <h2>Login with OTP</h2>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={isOtpSent}
      />
      <button onClick={sendOtp} disabled={isOtpSent}>Send OTP</button>
      {isOtpSent && (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default Login;
