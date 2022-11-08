import React from 'react'
import PropTypes from 'prop-types'
// import { a } from 'react-router-dom';

export default function Navbar(props) {
  let redThemeClick = ()=>{
    document.body.style.backgroundColor="#8b6464";
    props.toggleMode("red");
    props.showAlert("Red Mode Enabled","success")
  }
  let greenThemeClick = ()=>{
    document.body.style.backgroundColor="#405e40";
    props.toggleMode("green");
    props.showAlert("Green Mode Enabled","success")
  }
  let blueThemeClick = ()=>{
    document.body.style.backgroundColor="#29294b";
    props.toggleMode("blue");
    props.showAlert("Blue Mode Enabled","success")
  }
  let greyThemeClick = ()=>{
    document.body.style.backgroundColor="#4e4e4e";
    props.toggleMode("grey");
    props.showAlert("Grey Mode Enabled","success")
  }
  let whiteThemeClick = ()=>{
    document.body.style.backgroundColor="#dde0d6";
    props.toggleMode("white");
    props.showAlert("White Mode Enabled","success")
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
      <div className="box" id='box1' style={{backgroundColor:"#8b6464"}} onClick={redThemeClick}></div>
      <div className="box" id='box2' style={{backgroundColor:"#405e40"}} onClick={greenThemeClick}></div>
      <div className="box" id='box3' style={{backgroundColor:"#29294b"}} onClick={blueThemeClick}></div>
      <div className="box" id='box4' style={{backgroundColor:"#4e4e4e"}} onClick={greyThemeClick}></div>
      <div className="box" id='box5' style={{backgroundColor:"#dde0d6"}}  onClick={whiteThemeClick}></div>
    </div>
  </div>
    </nav>
  )
}
Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    aboutText : PropTypes.string
}
Navbar.defaultProps = {
    title : "Set the Title",
    aboutText : "Set about text"
}