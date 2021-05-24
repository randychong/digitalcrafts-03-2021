import React, { useState } from 'react'
import Joke from "../components/Joke"

export default function JokeContainer() {
    const [joke, setJoke] = useState("")
    return (
        <div>
            <h1>Joke Container</h1>
            <Joke />
        </div>
    )
}
