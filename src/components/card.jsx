
// Quick lab 3 - Props in react
// reusing and creating cards passing typed data & image
// Quick lab 4 Conditional Rendering - is active / not active  - below adds sympbol when set to isActive = true on app.js

import emily from '../images/Emily.jpeg';
import '../css/card.css';

const Card = ({ name, age, role, imageurl, isActive}) => {

    return(

   <div className="item-card">

        <img src={ imageurl } alt="emily"  />
        <div className="name"> <h1>{name} { isActive && '🥳'}</h1></div>
        <h2>{age}</h2>
        <h3>{role}</h3>
      
   

   </div>

    );



}

export default Card;