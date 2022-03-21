import axios from "axios";
import { useState } from "react";
import { PlaidLink, usePlaidLink } from 'react-plaid-link'
import './Link.css'
import lion from '../images/lion.jpeg'
import { Button, Card } from "@mui/material";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import SsidChartIcon from '@mui/icons-material/SsidChart';

const Link = ({ token, handleOnSuccess }) => {
  const [access_token, setAccessToken] = useState(null)
  const onExit = (error, metadata) => console.log('onExit', error, metadata);

  const onEvent = (eventName, metadata) => {
    console.log('onEvent', eventName, metadata);
  }





  return (
    <div className="link-main">
      <img src={lion} />

      <div className="plaidLink-container">
        <div className="link-main-title">
          <h1>DISCOVER THE BEST EXPERIENCE AT POWERMOVES</h1>
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
        </div>

        <div className="link-right-text">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
      </div>
      <Card style={{ width: 1000, height: 150, position: 'relative', bottom: 200, marginLeft: 'auto', marginRight: 'auto', borderRadius: 30, display: 'flex', textAlign: 'left', justifyContent: 'space-evenly' }}>
        <div className='link-bottom-card-left'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          <div className='link-bottom-inner-div'> <p>Track your money</p> <PriceCheckIcon style={{ color: 'rgb(210, 106, 200)', fontSize: 50, marginTop: 4, padding: 4 }} /> </div>

        </div>

        <div className='link-bottom-card-right'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          <div className='link-bottom-inner-div'> <p>Visualize Data</p> <SsidChartIcon style={{ color: 'rgb(210, 106, 200)', fontSize: 50, marginTop: 4, padding: 4 }} /> </div>

        </div>
        <Button style={{ border: '1px solid grey', height: 40, width: 150, borderRadius: 25, marginTop: 50, marginRight: 20 }}>More Info</Button>
      </Card>













    </div >
  );
}

export default Link;