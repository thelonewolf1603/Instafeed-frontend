import axios from "axios";
import * as React from "react";
import { loginUrl } from "../Constants";
import { Signup } from "./Signup";
import "../App.css";

export const Login = ({ setUser }) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoginPage, setLoginPage] = React.useState(true);

  const handleSubmit = async () => {
    try {
      await axios.post(loginUrl, {
        username,
        password,
      });
      setUser(username);
    } catch (e) {
      alert(e.response?.data?.message);
    }
  };

  return (
    <div className={"AuthContainer"}>
      {isLoginPage ? (
        <>
          <input
            className={"AuthInput"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            className={"AuthInput"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button className={"AuthInput"} onClick={handleSubmit}>
            {isLoginPage ? "Login" : "Sign up"}
          </button>
        </>
      ) : (
        <Signup setLoginPage={setLoginPage} />
      )}
      <button
        className={"AuthInput"}
        onClick={() => setLoginPage(!isLoginPage)}
      >
        {isLoginPage ? "Sign up as a new user" : "Already an existing user"}
      </button>
    </div>
  );
};
