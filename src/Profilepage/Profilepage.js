import React, { Component } from 'react';
import './Profilepage.css';
import Navbar from '../NavbarComponent/NavbarComponent.js';


export default class Mainpage extends Component {

  render() {
    return (
    <div>
        <Navbar/>
        
        <header>
            <div className="headerForWelcome">Welcome to your Profile page</div>
        </header>

    </div>
    );
  }
}
