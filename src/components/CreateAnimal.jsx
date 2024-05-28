// using JSON 

import {useState} from 'react'


export default function CreateAnimal () {

    // create state

    const [name, setName] = useState(''); 
    const [species, setSpecies] = useState(''); 
    const [age, setAge] = useState(0); 


    const handleSubmit = (e) => {

        // tells the event if the event doesnt get handled dont use the default action as I want to do something else
        e.preventDefault();
        const animal = {name, species, age}
        // const apiURL = {http://localhost:8000/animals'}
        fetch('http://localhost:8000/animals',
        
        {

                method: 'POST',
                // for most api json call
                headers: {"Content-Type" : "application/json"},
                // changing into json data
                body: JSON.stringify(animal)

        }
    )


        alert("you have added your animal")

        // reset text boxes
        setName('')
        setSpecies('')
        setAge('')

    }



    return(

        <form onSubmit={handleSubmit}>
           <label>Name of Animal : </label>
            <input type='text'
            required
            value={name}
            // event
            onChange={(e) => setName(e.target.value)} />

            <br />   <br />   <br />

            <label>Species of Animal : </label>
            <input type='text'
            required
            value={species}
            // event is on change ,  target value is whats in the input box
            onChange={(e) => setSpecies(e.target.value)} />

            <br />   <br />   <br />

            <label>Age of Animal : </label>
            <input type='number'
            required
            value={age}
            // event
            onChange={(e) =>setAge(e.target.value)} />

            <br />   <br />   <br />

            <button>Add Animal</button>
        </form>

    )


}