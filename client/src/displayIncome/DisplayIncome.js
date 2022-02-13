import React from 'react'
import Card from '@mui/material/Card';
import './DisplayIncome.css'
const DisplayIncome = () => {
  return (
    <Card style={{borderRadius:'25px',height: 124, maxWidth: '700px', gap:'20px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <div className="display-income-data">
            <p className='display-income-data-title start'> Net Worth</p>
            <Card style={{marginLeft:'25px', height: 10, display: 'flex', flexDirection: 'column', justifyContent:'center',width: 'fit-content', textAlign: 'center', padding: '20px', borderRadius: '25px'}}>
                <h3 className="display-income-data-number"> $83,0400.00</h3>
            </Card>
        </div>


        <div className="display-income-data">
            <p className='display-income-data-title'> Bank Accounts</p>
            <Card style={{height: 10, display: 'flex', flexDirection: 'column', justifyContent:'center',width: 'fit-content', textAlign: 'center', padding: '20px', borderRadius: '25px'}}>
            <h3 className="display-income-data-number"> $30,089.00</h3>
            </Card>
        </div>

        <div className="display-income-data">
            <p className='display-income-data-title display-income-data-credit-card'> Credit Cards</p>
            <Card style={{height: 10, display: 'flex', flexDirection: 'column', justifyContent:'center',width: 'fit-content', textAlign: 'center', padding: '20px', borderRadius: '25px'}}>
            <h3 className="display-income-data-number-credit"> $1,890.00</h3>
            </Card>
        </div>

        <div className="display-income-data">
            <p className='display-income-data-title start-end'> Investments</p>
            <Card style={{height: 10, display: 'flex', flexDirection: 'column', justifyContent:'center',width: 'fit-content', textAlign: 'center', padding: '20px', marginRight: '25px', borderRadius: '25px'}}>
            <h3 className="display-income-data-number"> $51,3100.00</h3>
            </Card>
        </div>




    </Card>
  )
}

export default DisplayIncome