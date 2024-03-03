import React, { useState, useEffect } from "react";

const User = {
  email: "test@example.com",
  pw: "test1234@",
};
function Login() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);

  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmation = () => {
    if (email === User.email && pw === User.pw) {
      alert("Successfully Signed in");
    } else {
      alert("Couldn't find your account");
    }
  };
  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  return (
    <div className="page">
      <div className="titleWrap">
        Sign in <br />
        Email & Password
      </div>

      <div className="contentWrap">
        <div className="inputTitle">Email </div>
        <div className="inputWrap">
          <input
            type="text"
            className="input"
            placeholder="test@gmail.com"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className="errorMessageWrap">
          {!emailValid && email.length > 0 && (
            <div>Input valid email address</div>
          )}
        </div>

        <div style={{ marginTop: "26px" }} className="inputTitle">
          Password{" "}
        </div>
        <div className="inputWrap">
          <input
            type="password"
            className="input"
            placeholder="Valid letters, numbers, and special characters only"
            value={pw}
            onChange={handlePw}
          />
        </div>
        <div className="errorMessageWrap">
          {!pwValid && pw.length > 0 && <div>Input valid password</div>}
        </div>
      </div>

      <div>
        <button
          onClick={onClickConfirmation}
          disabled={notAllow}
          className="bottomButton"
        >
          Check
        </button>
      </div>
    </div>
  );
}

export default Login;
