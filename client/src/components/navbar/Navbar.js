import React from 'react'
import { PlaidLink } from 'react-plaid-link';
import './Navbar.css'

const Navbar = ({ token, handleOnSuccess }) => {
  const onExit = (error, metadata) => console.log('onExit', error, metadata);

  const onEvent = (eventName, metadata) => {
    console.log('onEvent', eventName, metadata);
  }



  return (
    <>
      <nav id="navbar" class="">
        <div class="nav-wrapper">
          <div class="logo">
            <a href="#home"><i class="fas fa-chess-knight"></i> Logo</a>
          </div>
          <ul id="menu">

            <li><a href="#contact">Contact</a></li>
            <PlaidLink
              className="CustomButton"
              style={{ marginTop: 20 }}
              token={token}
              onExit={onExit}
              onSuccess={handleOnSuccess}
              onEvent={onEvent}
            >
              Open Link and connect your bank!
            </PlaidLink>
          </ul>
        </div>
      </nav>

      <div class="menuIcon">
        <span class="icon icon-bars"></span>
        <span class="icon icon-bars overlay"></span>
      </div>

      <div class="overlay-menu">
        <ul id="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="/signup">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>



    </>
  )
}

export default Navbar