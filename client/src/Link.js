import axios from "axios";
import { useState } from "react";
import { PlaidLink, usePlaidLink } from 'react-plaid-link'

const Link = ({ token, }) => {
  const [access_token, setAccessToken] = useState(null)
  const [transaction, setTransactions] = useState([])
  const onExit = (error, metadata) => console.log('onExit', error, metadata);

  const onEvent = (eventName, metadata) => {
    console.log('onEvent', eventName, metadata);
  }

  const onSuccess = (publicToken) => {
    fetch('http://localhost:8000/api/set_access_token', {
      method: 'POST',
      body: {
        publicToken: publicToken,

      },
    });



  };


  const handleOnSuccess = async (public_token, metadata) => {
    // send token to client server
    let data = {
      public_token: public_token
    }
    let response = await axios.post("http://localhost:8000/exchange_public_token", data);
    console.log(response)
    console.log('svvrdddasdasda', response.data.access_token)
    setAccessToken(response.data.access_token)
    //to do set accessToken into sessionStorage then move onto UI calls in other components.
    sessionStorage.setItem("accessToken", response.data["access_token"]);

  }

  return (
    <>
      <PlaidLink
        className="CustomButton"
        style={{ padding: '20px', fontSize: '16px', cursor: 'pointer' }}
        token={token}
        onExit={onExit}
        onSuccess={handleOnSuccess}
        onEvent={onEvent}
      >
        Open Link and connect your bank!
      </PlaidLink>
      {/* <button onClick={handleClick}>Get Transactions</button> */}

    </>
  );
}

export default Link;