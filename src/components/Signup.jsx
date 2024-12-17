import axios from "axios";
import * as React from "react";
import { signupUrl } from "../Constants";
export const Signup = ({setLoginPage}) => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async () => {
    try {
      await axios.post(signupUrl, {
        username,
        password,
      });
      setLoginPage(true)
     
    } catch (e) {
        alert(e.response?.data?.message)
    }
  };

  return (
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
      <button onClick={handleSubmit}>{"Signup"}</button>
    </>
  );
};
