import React from 'react'
import { useEffect } from 'react'
import MiddleChart from '../components/charts/MiddleChart'
import DisplayGains from '../components/displayGains/DisplayGains'
import DisplayGoals from '../components/displayGoals/DisplayGoals'
import DisplayIncome from '../components/displayIncome/DisplayIncome'
import Transaction from '../components/displayTransactions/Transaction'

import ExpenseBar from '../components/progressbar/ExpenseBar'
import GoalProgressBar from '../components/progressbar/GoalProgressBar'

import './DashboardScreen.css'


const DashboardScreen = ({ transaction }) => {

  console.log('das', transaction)
  return (
    <div className="dashboard-screen-main-container">
      <div className="flex-income-goals">
        <div className="display-icome-app-container">
          <DisplayIncome />
          <DisplayGains />
          <Transaction transaction={transaction} />

        </div>
        <MiddleChart />
        <div className="flex-column-goals-bar">
          <DisplayGoals />
          <div className="flex-progress-tracker">
            <GoalProgressBar />
            <ExpenseBar />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardScreen