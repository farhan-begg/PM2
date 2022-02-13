import React from 'react'
import Card from '@mui/material/Card';
import '../DisplayIncome'
const DisplayGains= () => {
  return (
    <Card style={{borderRadius:'25px',height: 124, maxWidth: '700px', gap:'20px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <div className="display-income-data">
            <p className='display-income-data-title start'>Weekly Gains</p>
            <Card style={{marginLeft:'25px', height: 10, display: 'flex', flexDirection: 'column', justifyContent:'center',width: 'fit-content', textAlign: 'center', padding: '20px', borderRadius: '25px'}}>
                <h3 className="display-income-data-number"> $3,579.00</h3>
            </Card>
        </div>

        <div className="display-income-data">
            <p className='display-income-data-title display-income-data-credit-card'> Weekly Losses</p>
            <Card style={{height: 10, display: 'flex', flexDirection: 'column', justifyContent:'center',width: 'fit-content', textAlign: 'center', padding: '20px', borderRadius: '25px'}}>
            <h3 className="display-income-data-number-credit"> $580.00</h3>
            </Card>
        </div>
        <div className="display-income-data">
            <p className='display-income-data-title'> Monthly Gains</p>
            <Card style={{height: 10, display: 'flex', flexDirection: 'column', justifyContent:'center',width: 'fit-content', textAlign: 'center', padding: '20px', borderRadius: '25px'}}>
            <h3 className="display-income-data-number"> $8,019.00</h3>
            </Card>
        </div>



        <div className="display-income-data">
            <p className='display-income-data-title display-income-data-credit-card start-end'> Monthly Losses</p>
            <Card style={{height: 10, display: 'flex', flexDirection: 'column', justifyContent:'center',width: 'fit-content', textAlign: 'center', padding: '20px', marginRight: '25px', borderRadius: '25px'}}>
            <h3 className="display-income-data-number-credit"> $2,4100.00</h3>
            </Card>
        </div>




    </Card>
  )
}

export default DisplayGains