import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { LoginContext } from "./helper/Context";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(null)
  return (
    <LoginContext.Provider value={{loggedIn, setLoggedIn }}>
      <Navbar className="bg-zinc-800 from-neutral-200 " />
    </LoginContext.Provider>
  );
}
