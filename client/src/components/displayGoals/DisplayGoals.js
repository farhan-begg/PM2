import React from 'react'
import Card from '@mui/material/Card';
import '../displayIncome/DisplayIncome'
const DisplayGoals = () => {
    return (
        <Card style={{ borderRadius: '25px', height: 124, maxWidth: '700px', gap: '20px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <div className="display-income-data">
                <p className='display-income-data-title start'>Current Monthly</p>
                <Card style={{ marginLeft: '25px', height: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 'fit-content', textAlign: 'center', padding: '20px', borderRadius: '25px' }}>
                    <h3 className="display-income-data-number goal-grey"> $1,532.00</h3>
                </Card>
            </div>

            <div className="display-income-data">
                <p className='display-income-data-title display-income-data-credit-card'> Monthly Goal</p>
                <Card style={{ height: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 'fit-content', textAlign: 'center', padding: '20px', borderRadius: '25px' }}>
                    <h3 className="display-income-data-number"> $5,000.00</h3>
                </Card>
            </div>
            <div className="display-income-data">
                <p className='display-income-data-title'> Current Year</p>
                <Card style={{ height: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 'fit-content', textAlign: 'center', padding: '20px', borderRadius: '25px' }}>
                    <h3 className="display-income-data-number  goal-grey"> $12,019.00</h3>
                </Card>
            </div>



            <div className="display-income-data">
                <p className='display-income-data-title display-income-data-credit-card start-end'> Yearly Goal</p>
                <Card style={{ height: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', width: 'fit-content', textAlign: 'center', padding: '20px', marginRight: '25px', borderRadius: '25px' }}>
                    <h3 className="display-income-data-number"> $20,4100.00</h3>
                </Card>
            </div>




        </Card>
    )
}

export default DisplayGoals