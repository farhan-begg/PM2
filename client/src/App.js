import './App.css';
import DisplayGains from './displayIncome/displayGains/DisplayGains';
import DisplayGoals from './displayIncome/displayGoals/DisplayGoals';
import DisplayIncome from './displayIncome/DisplayIncome';
import ExpenseBar from './progressbar/ExpenseBar';
import GoalProgressBar from './progressbar/GoalProgressBar';

function App() {
  return (
    <div className="App">
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
