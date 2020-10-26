import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import "../App.css";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);

  return <AppRouter />;
}

export default App;
