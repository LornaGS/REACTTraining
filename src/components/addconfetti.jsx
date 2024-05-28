
// Quick Lab 7 - Event Handling 
//quick lab 10 - useEffect

import JSConfetti from 'js-confetti';

const jsConfetti = new JSConfetti()

const addConfetti = ({ text }) => {

    // jsConfetti.addConfetti({ emojis: [' 🎂, 🎉, 🥳'], confettiNumber: 16  }) 
    jsConfetti.addConfetti({ emojis: [ text, '🎂, 🎉, 🥳'  ], confettiNumber: 100, emojiSize:30,  }) 


 
}
  

export default addConfetti; 