import React, { useState } from 'react'
import TransactionContext from './TransactionContext'

const GlobalState = (props) => {
    let initialState = {
        transactions: [
            { id: 1, text: 'My Tution Wage', amount: 3680 },
            { id: 2, text: 'Fuel', amount: -500 },
            { id: 3, text: 'Sadaqa', amount: -800 },
            { id: 4, text: 'Eidi', amount: 1500 }
        ]
    }

    const [transactions, setTransactions] = useState(initialState.transactions);

    // CRUD

    // Add

    const addInput = (newTransaction) => {
        setTransactions(transactions.concat(newTransaction));
    }

    // Delete

    const deleteInput = (id) => {
        setTransactions(transactions.filter((transaction) => { return transaction.id !== id }));
    }


    return (
        <TransactionContext.Provider value={{ transactions, setTransactions, addInput, deleteInput }}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default GlobalState