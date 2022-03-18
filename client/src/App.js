import './App.css';
import DisplayGains from './displayIncome/displayGains/DisplayGains';
import DisplayGoals from './displayIncome/displayGoals/DisplayGoals';
import DisplayIncome from './displayIncome/DisplayIncome';
import ExpenseBar from './progressbar/ExpenseBar';
import GoalProgressBar from './progressbar/GoalProgressBar';
import Link from './Link';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'


function App() {


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



  const getData = async () => {
    const res = await axios.get('http://localhost:8000/exchange_public_token');
    console.log(res)
  }
  console.log(token)




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
      <Link token={token} access_Token={access_Token} />
      <button onClick={getData}>get data</button>

      {/* // <Route path="/home" render={(routerprops) => <div accessToken={accessToken} />} /> */}



      <div className="flex-income-goals">
        <div className="display-icome-app-container">
          <DisplayIncome />
          <DisplayGains />

        </div>
        <div className="flex-column-goals-bar">
          <DisplayGoals />
          <div className="flex-progress-tracker">
            <GoalProgressBar />
            <ExpenseBar />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
