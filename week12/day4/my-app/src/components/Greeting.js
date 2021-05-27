import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { changeFakeData } from "../actions/greetingActions"

export default function Greetings() {
    const dispatch = useDispatch()
    const fakeData = useSelector((state) => state.fakeData)
    return (
        <div>
            <h1>Hello Redux</h1>
            {fakeData.map((data) => (
                <p>{data.userName}</p>
            ))}
            {fakeData.map((data) => (
                <p>{data.height}</p>
            ))}
            <button
                onClick={() => changeFakeData(dispatch)}>
                Change</button>
        </div>
    )
}
