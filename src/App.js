import React from "react";
import "./App.css";
import { Bio, Gallery, MobileNav, Nav } from "./components";

const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Bio />
        <Gallery />
      </div>
      <MobileNav />
    </>
  );
};

export default App;
