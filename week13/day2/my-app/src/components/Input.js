import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { displayName, displayPassword } from "../actions/actions"

export default function Input() {
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Input</h1>
            <input 
            onChange={(e) => displayName(dispatch, e.target.defaultValue)}
            type="text" 
            placeholder="username"></input>
            <input 
            onChange={(e) => displayPassword(dispatch, e.target.defaultValue)}
            type="text" 
            placeholder="password"></input>
            <button
                onClick={()=> {
                    displayName(dispatch);
                    displayPassword(dispatch)
                }}
                type="submit">
                Submit</button>
        </div>
    )
}
