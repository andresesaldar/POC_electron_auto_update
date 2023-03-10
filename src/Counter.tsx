import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <button onClick={() => setCounter(counter / counter)}>
                divide
            </button>
            <button onClick={() => setCounter(counter - 1)}>
                -
            </button>
            <span style={{padding: "10px"}}>
                {counter}
            </span>
            <button onClick={() => setCounter(counter + 1)}>
                +
            </button>
            <button onClick={() => setCounter(counter * counter)}>
                multiply
            </button>
        </>
    );
}
 
export default Counter;