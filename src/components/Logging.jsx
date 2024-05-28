import { useState, useEffect } from 'react'

export default function Logging() {



//states
const [count, setCount] = useState(0);
const [isLoggingOn, setIsLoggingOn] = useState(2);

//useEffect on the count - any time the value of count changes the useEffect runs

useEffect(() =>{

    if(isLoggingOn){

        console.log(count);
    }

} , [count ] )

//any other functions



    return (

        <div>
        <h1>Enable/Disable console logging button</h1>

        {/* if logon is not the same as it previously was */}

        <button onClick={() => setIsLoggingOn((prev) => !prev)}>

            {/* if its true print on else print off */}
            Logging:{isLoggingOn ? 'on' : 'off'}
        </button>

        <h2>{count}</h2>
        <button onClick={() => setCount((plusOne) => plusOne +1)}>+1</button>

        <button onClick={() => setCount(0)}>Reset</button>

        <button onClick={() => setCount((minusOne) => minusOne -1)}>-1</button>


    </div>
    ) ;

}