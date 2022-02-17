import './App.css';
import DisplayGains from './displayIncome/displayGains/DisplayGains';
import DisplayGoals from './displayIncome/displayGoals/DisplayGoals';
import DisplayIncome from './displayIncome/DisplayIncome';
import Plaid from './api/plaid/Plaid';
import ExpenseBar from './progressbar/ExpenseBar';
import GoalProgressBar from './progressbar/GoalProgressBar';
import Link from './Link';


function App() {

  return (
    <div className="App">
      <Link/>

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
