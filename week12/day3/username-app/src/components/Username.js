import React from 'react'
import { useSelector, useDispatch } from "react-redux"

export default function Username() {
    const username = useSelector(state => state.username)
    const array = useSelector(state => state.array)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Username</h1>
            <p>{username}</p>
            <button
                onClick={() => 
                dispatch({ type: "CHANGE_NAME"})}
            >Change Name</button>
            <h1>Array</h1>
            <p>Array: {array}</p>
            <button
                onClick={() => 
                dispatch({ type: "FILL_ARRAY"})}
            >Fill Array</button>
        </div>
    )
}
