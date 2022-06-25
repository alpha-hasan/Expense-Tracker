import React, { useContext } from 'react'
import TransactionContext from '../context/TransactionContext'

const Transaction = (props) => {
    const { deleteInput } = useContext(TransactionContext);
    const sign = props.amount < 0 ? '-' : '+';
    const onClickHandler = (e) => {
        e.preventDefault();
        deleteInput(props.id);
    }
    return (
        <li className={props.amount < 0 ? 'minus' : 'plus'}>
            {props.text} <span>{sign}${Math.abs(props.amount)}</span><button className="delete-btn" onClick={onClickHandler}>x</button>
        </li>
    )
}

export default Transaction