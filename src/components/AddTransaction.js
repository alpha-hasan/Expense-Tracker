import React, { useContext, useState } from 'react'
import TransactionContext from '../context/TransactionContext'

const AddTransaction = () => {
    const [input, setInput] = useState({ text: "", amount: "" });
    const { transactions, addInput } = useContext(TransactionContext);

    const onChangeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: transactions.length + 1,
            text: input.text,
            amount: +input.amount
        }
        addInput(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" placeholder="Enter text..." name='text' value={input.text} onChange={onChangeHandler} />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
                    <input type="number" placeholder="Enter amount..." name='amount' value={input.amount} onChange={onChangeHandler} />
                </div>
                <button type='submit' className="btn">Add transaction</button>
            </form>
        </>
    )
}

export default AddTransaction;