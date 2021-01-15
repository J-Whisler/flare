import React from "react";

import Home from "./pages/Home";
import Nav from "./components/Nav";

import GlobalStyles from "./components/GlobalStyles";

import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Home />
      <Route path={["/game/:id", "/"]}></Route>
    </div>
  );
}

export default App;
