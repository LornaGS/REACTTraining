import { useState, useEffect } from 'react'
import addConfetti from './addconfetti'

export default function CountingConfetti() {

// for useEffect Lab 10
  
const [count, setCount] = useState(0)
const [isConfettiEnabled, setIsConfettiEnabled] = useState(true)

useEffect(() => {
  // This should run whenever "count" changes.
  if (isConfettiEnabled) {
    addConfetti({ text: count.toString() })
  }
}, [count])



//any other functions



    return (

        <main>
    
        <h1>🎊 Confetti Counter</h1>

          {/* if confettit is not the same as it previously was */}
  
        <button onClick={() => setIsConfettiEnabled((prev) => !prev)}>
          Confetti: {isConfettiEnabled ? 'on' : 'off'}
        </button>
  
        <h2>{count}</h2>
  
        <button onClick={() => setCount((previous) => previous + 1)}> +1
        </button>
      </main>
  
    ) ;

}