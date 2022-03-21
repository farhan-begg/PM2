import { Card } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import './GoalProgressBar.css'
  
const ExpenseBar = () => {
    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        width: 250,
        marginLeft: 20,
    
        [`&.${linearProgressClasses.colorPrimary}`]: {
          backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 :"#1CAE57 "],
        },
        [`& .${linearProgressClasses.bar}`]: {
          borderRadius: 5,
          backgroundColor: theme.palette.mode === '#D20915' ? '#D20915' : '#D20915' , 
        },
      }));
  return (
    <Card style={{height: 200, borderRadius: '25px', width: 320, display: 'flex', flexDirection: 'column', justifyContent: 'between'}}>
        <p className="goal-tracker-title">Expense Tracker</p>

<div className='display-label-column'>
<div className="label-container">
<div className="goal-progressbar-label">
    <p className="bar-title">Weekly Limit</p>
    <p className="bar-percentage">70% reached</p>
</div>

<BorderLinearProgress  variant="determinate" value={70} />
</div>

<div className="label-container">
<div className="goal-progressbar-label">
    <p className="bar-title">Monthly Limit</p>
    <p className="bar-percentage">60% reached</p>
</div>

<BorderLinearProgress  variant="determinate" value={60} />
</div>
</div>
    </Card>
  )
}

export default ExpenseBar