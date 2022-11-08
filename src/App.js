import { useState } from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import About from "./components/About";
import Alert from "./components/Alert";
// import Foot from './components/Foot';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null); // object banaye hai
  let showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };
  let toggleMode = (color) => {
    if (mode === "dark" && color === "white") {
      setMode("light");
      document.body.style.color = "black";
    } else if (mode === "light" && color === "white") {
    } else {
      setMode("dark");
      document.body.style.color = "white";
    }
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="WordUtils"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
          showAlert={showAlert}
        />
        <div className="container my-4">
          <Alert alert={alert} />
          <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
          {/* <Routes>
            <Route exact  path="/" element={<TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>}></Route>
            <Route exact  path="/about" element={<About/>}></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
