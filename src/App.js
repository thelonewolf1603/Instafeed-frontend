import "./App.css";
import { BlogFeed } from "./components/Feed";
import * as React from "react";
import { Login } from "./components/Login";

const HomePage = ({ user }) => {
  return (
    <>
      <h1>{"Welcome to InstaFeed"}</h1>
      <BlogFeed user={user} />
    </>
  );
};

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <div className="App">{!user ? <Login setUser={setUser} /> : <HomePage user={user}/>}</div>
  );
}

export default App;
