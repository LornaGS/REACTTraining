import {useState} from 'react'

// create stateless function
//Quick lab 12 - editing Json in react

export default function CreateUsers () {
   

const [first, setFirst] = useState(''); 
const [second, setSecond] = useState(''); 
const [title, setTitle] = useState(''); 



const handleSubmit = (e) => {
    e.preventDefault();
    const user = {first, second, title}

fetch('http://localhost:8000/users', {

    method: 'POST',
    headers: { "Content-Type": "application/json"  },
    body: JSON.stringify(user)

}

)


setFirst('')
setSecond('')
setTitle('')


}



return(

<form onSubmit={handleSubmit}>
    <label> First Name : </label>
    <input type='text'
            required
            value={first}
            onChange={(e) => setFirst(e.target.value)}/>

            <br/><br />

    <label> Second Name : </label>
        <input type='text'
                required
                value={second}
                onChange={(e) => setSecond(e.target.value)}/>

            <br/><br />

    <label> Title : </label>
        <select 
                value={title}
                onChange={(e) => setTitle(e.target.value)}>
                        <option value="mr">Mr</option>
                        <option value="mrs">Mrs</option>
                        <option value="dr">Dr</option>

                    </select>
                
    <button>add user</button>

</form>


)

}