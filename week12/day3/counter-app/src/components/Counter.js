import React from 'react'
import { useSelector, useDispatch } from  "react-redux"
import { add, subtract } from "../actions/counter-actions"

export default function Counter() {
    const counter = useSelector(state => state.counter)

    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button
                onClick={() => 
                add(dispatch)}
            >Add</button>
            <button
                onClick={() => 
                subtract(dispatch)}
            >Subtract</button>
        </div>
    )
}
