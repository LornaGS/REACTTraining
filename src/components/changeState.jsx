//change state - lab 8


import { useState } from 'react'

const ChangeState = () => {

    const name = "Emily"
 
    const [fullName, setFullName] = useState("lovely"); 
    
    //standard component setup
    return (
        <> 
           <h1>{fullName}</h1>
              {/*button with an arrow function setFullName */}
            <button onClick={() => (setFullName("bday girl"))}> 
                Change Name here!
            </button>
            <button onClick={() => (setFullName(name))}>
                Reset Name here!
            </button>
        </>
    );
}
 
export default ChangeState;



