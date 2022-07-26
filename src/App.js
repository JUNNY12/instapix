import React from "react";
import "./App.css";
import { useState } from "react";
import { Bio, Gallery, MobileNav, Nav } from "./components";

const App = () => {

  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode)
  
  return (
    <>
      <Nav 
      darkMode={darkMode}
      />
      <div className={darkMode?"dark container" :"container"}>
        <Bio 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        />
        <Gallery 
        darkMode={darkMode} />
      </div>
      <MobileNav darkMode={darkMode}/>
    </>
  );
};

export default App;
