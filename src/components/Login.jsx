import axios from "axios";
import * as React from "react";
import { loginUrl } from "../Constants";
import { Signup } from "./Signup";
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
    <>
      {isLoginPage ? (
        <>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            placeholder="username"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
          />
          <button onClick={handleSubmit}>
            {isLoginPage ? "Login" : "Sign up"}
          </button>
        </>
      ) : (
        <Signup setLoginPage={setLoginPage} />
      )}
      <button onClick={() => setLoginPage(!isLoginPage)}>
        {isLoginPage ? "Sign up as a new user" : "Already an existing user"}
      </button>
    </>
  );
};
