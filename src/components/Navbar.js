import React from 'react'
import PropTypes from 'prop-types'
import Logo from './Logo';
// import { a } from 'react-router-dom';

export default function Navbar(props) {
  let bgcolor = document.body.style.backgroundColor;
  let redThemeClick = ()=>{
    if(bgcolor==='rgb(139, 100, 100)')
     {
        props.showAlert("Already in Red Mode Theme","warning");
     }
     else{
      document.body.style.backgroundColor="#8b6464";
      props.toggleMode("red");
      props.showAlert("Red Mode Enabled","success")
     }
  }
  let greenThemeClick = ()=>{
    if(bgcolor==='rgb(64, 94, 64)')
    {
      props.showAlert("Already in Green Mode Theme","warning");
    }
    else{
      document.body.style.backgroundColor="#405e40";
      props.toggleMode("green");
      props.showAlert("Green Mode Enabled","success")
    }
  }
  let blueThemeClick = ()=>{
    if(bgcolor==='rgb(41, 41, 75)')
    {
      props.showAlert("Already in Blue Mode Theme","warning");
    }
    else{
      document.body.style.backgroundColor="#29294b";
      props.toggleMode("blue");
      props.showAlert("Blue Mode Enabled","success");
    }
  }
  let greyThemeClick = ()=>{
    if(bgcolor==='rgb(78, 78, 78)')
    {
      props.showAlert("Already in Grey Mode Theme","warning");
    }
    else{
      document.body.style.backgroundColor="#4e4e4e";
      props.toggleMode("grey");
      props.showAlert("Grey Mode Enabled","success")
    }
  }
  let whiteThemeClick = ()=>{
    console.log(bgcolor);
    if(bgcolor==='rgb(221, 224, 214)')
    {
      props.showAlert("Already in White Mode Theme","warning");
    }
    else{
      document.body.style.backgroundColor="#dde0d6";
      props.toggleMode("white");
      props.showAlert("White Mode Enabled","success")
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Logo/>
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
