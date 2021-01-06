import React, { Component } from 'react';
import { Navbar } from 'bootstrap-4-react';
import './stylesheets/Footer.css';
import { BsCircleHalf } from 'react-icons/bs';


export default class App extends Component {
    render() {
  
      return (
        <Navbar>
          <BsCircleHalf className="logo" />
        </Navbar>
      )
    }
  }