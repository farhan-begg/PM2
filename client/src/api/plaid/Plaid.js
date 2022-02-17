// import React, { useEffect } from 'react'
// import {PlaidLink} from "react-plaid-link";
// import axios from 'axios';
// import { useState } from 'react';

// const Plaid = () => {

//    const [linkToken = setLinkToken] = useState("")

//    useEffect(() => {
//      createLinktToken = async () => {
//        let response = await axios.post("")
//        setLinkToken({linkToken: response.data["link_token"]})
//      }
//      createLinktToken()
//    }, [])

//    const handleOnSuccess = async(public_token, metadata) => {
//      let data = {
//        public_token: public_token
//      }
//      let response = await axios.post("/exchange_public_token", data)
//      console.log(response)

//      sessionStorage.setItem("accessToken", response.data["access_token"])
//    }

//   return (
//     <div>Plaid</div>
//   )
// }

// export default Plaid