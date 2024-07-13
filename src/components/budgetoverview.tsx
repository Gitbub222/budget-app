import * as React from 'react'
import "../styles/budget-overview.css"

const BudgetOverview = ({ totalExpenses }: any) => {
    const balance = 500;
    const [savings, SetSavings] = React.useState(balance - totalExpenses)

    React.useEffect(() => {
        SetSavings(balance - totalExpenses)
    },
        [totalExpenses]
    )

    return (
        <div className='overview-container'>
            <div className='title'>
                <span>Weekly Budget Overview</span>
            </div>
            <div className='outer-box'>
                <div className='box1'>
                    <span>Current Balance</span>
                    <span>{`$${balance.toFixed(2)}`}</span>
                </div>
                <div className='box2'>
                    <span>Total Expenses</span>
                    <span>{`$${totalExpenses.toFixed(2)}`}</span>
                </div>
                <div className='box3'>
                    <span>Weekly Savings</span>
                    <span>{`$${savings.toFixed(2)}`}</span>
                </div>
            </div>
        </div>
    )
}

export default BudgetOverview