import React, { useState, useEffect } from 'react'
import Joke from "../components/Joke"

export default function JokeContainer() {
    const [joke, setJoke] = useState("")
    const [name, setName] = useState("Joe")

    // useEffect(() => {
    //     console.log("hey")
    // });

    useEffect(() => {
        getJoke()
        console.log("hey you")
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
        setJoke(json)
    }
    return (
        <div>
            <h1>Joke Container</h1>
            <p></p>
            <button>Add</button>
            <button>Subtract</button>
            <Joke />
        </div>
    )
}
