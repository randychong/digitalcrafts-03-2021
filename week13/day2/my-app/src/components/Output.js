import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { displayName, displayPassword } from "../actions/actions"

export default function Output() {
    const dispatch = useDispatch()
    const username = useSelector((state) => state.Username)
    const password = useSelector((state) => state.Password)
    return (
        <div>
            <h1>Output</h1>
            <p>{username}</p>
            <p>{password}</p>
        </div>
    )
}
