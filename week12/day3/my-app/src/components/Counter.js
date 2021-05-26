import React from 'react'

export default function Counter(props) {
    return (
        <div>
            <h1>Counter</h1>
            <p>{props.counter}</p>
            <button
                onClick={() => {
                
            }}>Add</button>
            <button
                onClick={() => {
                
            }}>Subtract</button>
        </div>
    )
}
