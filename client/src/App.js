import './App.css';

import Link from './plaidLanding/Link';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import DashboardScreen from './Screens/DashboardScreen';
import Navbar from './components/navbar/Navbar';


function App() {

  const [transaction, setTransactions] = useState([])

  const [token, setLinkToken] = useState()
  const [access_Token, setAccessToken] = useState(null)
  // const [public_token, setPublickToken] = useState(null)



  // declare the data fetching function
  const createLinkToken = async () => {
    const res = await axios.post('http://localhost:8000/create_link_token');
    const data = res.data.link_token
    console.log(res)
    console.log('data', data.toString())
    setLinkToken(data.toString())
  }
  console.log(token)


  const handleOnSuccess = async (public_token, metadata) => {
    // send token to client server
    let data = {
      public_token: public_token
    }
    let response = await axios.post("http://localhost:8000/exchange_public_token", data);
    console.log(response)
    console.log('svvrdddasdasda', response.data.access_token)
    console.log(response.data.transactionsResponse)
    setAccessToken(response.data.access_token)
    console.log(response.data.transactionsResponse)
    setTransactions(response.data.transactionsResponse)
    //to do set accessToken into sessionStorage then move onto UI calls in other components.
    sessionStorage.setItem("accessToken", response.data["access_token"]);

  }


  useEffect(() => {
    createLinkToken()

  }, [])


  // const data = await response.json();





  // const res = await fetch('http://localhost:8000/api/set_access_token', {
  //   method: 'POST',
  //   publicToken: publicToken,
  //   headers: {
  //     'Content-Type': 'application.json'
  //   }
  // })
  // console.log(res.data)
  // const data = res.data.access_token
  // //updates state with permanent access token
  // setAccessToken({ access_token: data })
  // const res = await axios.post('http://localhost:8000/get_access_token', publicToken)
  // const data = res.data.access_token
  //updates state with permanent access token

  // }




  return (
    <div className="App">
      <Navbar token={token} handleOnSuccess={handleOnSuccess} />
      <Router>
        <Routes>
          <Route path="/signup" exact={true} element={<Link token={token} access_Token={access_Token} handleOnSuccess={handleOnSuccess} />} />
        </Routes>
        <Routes>
          <Route path="/" exact={true} element={<DashboardScreen transaction={transaction} />} />
        </Routes>
      </Router>


      {/* // <Route path="/home" render={(routerprops) => <div accessToken={accessToken} />} /> */}




    </div>
  );
}

export default App;
