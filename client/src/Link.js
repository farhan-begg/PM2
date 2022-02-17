import React, { useEffect } from 'react'
import {PlaidLink} from "react-plaid-link";
import axios from 'axios';
import { useState } from 'react';

const Link = () => {

   const [linkToken, setLinkToken] = useState("")



   useEffect(() => {
    // declare the data fetching function
    const createLinkToken = async () => {
 
      const res = await axios.post('http://localhost:5000/create_link_token');
      const data = res.data.link_token
      console.log(res)
       console.log('data',data)
        setLinkToken({ token: data })
    }
    createLinkToken()
      .catch(console.error);
  }, [])

  const onExit = (error, metadata) => console.log('onExit', error, metadata);
  
  const onEvent = (eventName, metadata) => {
    console.log('onEvent', eventName, metadata);
  }
  
  const onSuccess = (token, metadata) =>{
    console.log('onSuccess', token, metadata);
  }


  return (
      <div>
      <PlaidLink
        className="CustomButton"
        style={{ padding: '20px', fontSize: '16px', cursor: 'pointer' }}
        token={linkToken}
        onExit={onExit}
        onSuccess={onSuccess}
        onEvent={onEvent}
      >
        Open Link and connect your bank!
      </PlaidLink>
      </div>
  )
}

export default Link