import {useState, useEffect} from 'react'
 
export default function CollectData() {
 
    const apiUrl = 'https://dog.ceo/api/breeds/image/random'
    const [imageUrl , setImageUrl] = useState(' ');
 
 
    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setImageUrl(data.message))
 
    }, [])
 
    return(
       < main>
       <h1> Go Fetch</h1>
        <div>
            <img width={20} src={imageUrl} alt='Pic'/>
        </div>

        </main>    
    )
 
}