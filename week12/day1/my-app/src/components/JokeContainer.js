import React, { useState, useEffect } from 'react'
import Joke from "../components/Joke"

export default function JokeContainer() {
    const [joke, setJoke] = useState("")
    const [oldJokes, setOldJokes] = useState([])
    const jokeCache = []

    // useEffect(() => {
    //     console.log("hey")
    // });

    useEffect(() => {
        getJoke()
    }, []);

    // useEffect(() => {
    //     getJoke()
    //     console.log("hey you there")
    // }, [name]);
    
    // useEffect(()=>{}) - similar to componentDidMount
    const getJoke = async () => {
        const response = await fetch("https://icanhazdadjoke.com", { headers: { Accept: "application/json" },
        });
        const json =  await response.json();
        setJoke(json.joke)
    }
    return (
        <div>
            <h1>Joke Container</h1>
            <Joke joke={joke} setJoke={setJoke}/>
            <button onClick={() => {
                getJoke()
            }}>New Joke</button>
        </div>
    )
}
