import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState("");

  const onSubmit = (ev) => {
    ev.preventDefault();
    // Check email and password here
    const isValid = true; // Replace with your validation logic

    if (!isValid) {
      setError("Invalid email or password");
    } else {
      // Proceed with login logic
      // For now, just clear the error
      setError("");
    }
  };

  return (
    <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className="title">Login</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          {error && <p className="error-message">{error}</p>}
          <p className="message">
            Not registered? <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
