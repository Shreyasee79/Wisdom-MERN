import './CardA.css'
import { useState } from "react"

const CardB = () => {

    const [counter, setCounter] = useState(0);

    return (
        <>
            <div class="AB">
                <h1>{counter}</h1>

                <button onClick={() => { setCounter(counter + 1) }}>+</button>
                <button onClick={() => { setCounter(0) }}>Reset</button>
                <button onClick={() => { setCounter(counter - 1) }}>-</button>
            </div>
        </>
    )
}

export default CardB