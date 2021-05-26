import React from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function Counter() {
    const counter = useSelector((state) => state.counter)
    
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Counter</h1>
            <p>{counter}</p>
            <button
                onCLick={() => dispatch({ type: "ADD"})}
                >Add</button>
            <button
                onCLick={() => dispatch({ type: "SUBTRACT"})}
                >Subtract</button>
        </div>
    )
}
