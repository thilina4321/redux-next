import React from "react";
import { BrowserRouter } from "react-router-dom";
import Appbar from "./components/Navigation/Appbar";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
      </BrowserRouter>
    </div>
  );
};

export default App;
