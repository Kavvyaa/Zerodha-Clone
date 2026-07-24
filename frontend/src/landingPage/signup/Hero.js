import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Hero() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitted");
    console.log("Input Value:", inputValue);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/signup`,
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log("Response:", response);
      console.log("Data:", response.data);

      const { success, message } = response.data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("AXios:" , error)
      console.log(error.response);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <section className="signup-hero">
      <div className="container">
        <div className="text-center signup-heading">
          <h1>Open a free demat and trading account online</h1>
          <p>
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>

        <div className="row align-items-center signup-hero-content">
          <div className="col-lg-6 text-center">
            <img
              src="/Media/images/account_open.svg"
              alt="Open a Zerodha demat and trading account"
              className="signup-main-img"
            />
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="signup-form-box">
              <h2>Open a free demat &amp; trading account online</h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  className="form-control"
                  id="username"
                  placeholder="username please..."
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  onChange={handleOnChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  className="form-control"
                  id="password"
                  onChange={handleOnChange}
                />
              </div>
              <p className="nri-copy">
                Already have a account &nbsp; <a href="./login">Click here</a>
              </p>
              <button className="btn btn-primary signup-btn" type="submit" onClick={() => console.log("Button clicked")}>
                Sign up
              </button>
              </form>

              <p className="terms-copy">
                By proceeding, you agree to the Zerodha <a href="/">terms</a>{" "}
                &amp; <a href="/">privacy policy</a>
              </p>
            </div>
          </div>
        </div>

        <div className="nri-strip">
          Looking to open NRI account? <a href="/">Click here</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
