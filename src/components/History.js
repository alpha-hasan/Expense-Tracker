import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'
import Transaction from './Transaction'

const History = () => {
    const { transactions } = useContext(TransactionContext);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction) => {
                    return <Transaction key={transaction.id} id={transaction.id} text={transaction.text} amount={transaction.amount} />
                })}
            </ul>
        </>
    )
}

export default History