import React, { useState } from 'react'
import TransactionContext from './TransactionContext'

const GlobalState = (props) => {
    let initialState = {
        transactions: [
            { id: 1, text: 'Flower', amount: -20 },
            { id: 2, text: 'Salary', amount: 300 },
            { id: 3, text: 'Book', amount: -10 },
            { id: 4, text: 'Camera', amount: 150 }
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