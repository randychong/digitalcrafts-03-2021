import React,  {useState } from 'react';

const FunctionalBased = () => {
    const [loadingMessage, setLoadingMessage] = useState("loading")
    return (
        <div>
            <h1>Functional Based Components</h1>
            {loadingMessage}
            <button onClick={() => setLoadingMessage("finished")}>Finished Loading</button>
        </div>
    )
};

export default FunctionalBased