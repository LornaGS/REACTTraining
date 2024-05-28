
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// quick lab 8 - state in react
import { useState } from 'react';
import Navbar from './components/navbar'
import './App.css';
import itemsData  from './itemsData'
import ItemCard from './components/items';
import Calc from './components/calc';
import addconfetti from './components/addconfetti';
import Card from './components/card';
import emily from './images/Emily.jpeg';
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ChangeState from './components/changeState';
import CounterDisplay from './components/counterDisplay';
import ResetButton from './components/resetButton';
import IncrementButton from './components/incrementButton';

function App() {
  const [count, setCount] = useState(0)
    
    function handleIncrement() {
    
      setCount((previous) => previous + 1)
      
      }
      
      function handleReset() {
      
      setCount(0)
      }
      

  return (

 
      
    <div className="App">
        <BrowserRouter >

            <Navbar />
          
                <Routes>
                  <Route path="/" element={<HomePage />} />

                    <Route path="/about" element={<AboutPage />} />

                </Routes>
            

        </BrowserRouter>

        <ChangeState />

        
        <CounterDisplay count={count} />

        <IncrementButton increment={handleIncrement} /> 
        <ResetButton reset={handleReset} />

      <h1> emily's story</h1>

         <Calc /> 
         <br/>
         <hr/>
         <br/>
        <p> <Card name="emily" age="8" role="birthday girl" imageurl= { emily } isActive={ true } /> </p>
      
       


        <p> <Card name="emily" age="8" role="birthday girl" imageurl= { emily } isActive={ false } /> </p>

         <br/>
       
         <br/>
         <button onClick={addconfetti}>Emily bday surprise</button> 
         <br/>
        
         <br/>
         
         <p> <h1>uni codes</h1></p>
      <br/>
         <hr/>
         <br/>
      <div className="item-grid"> </div>
      {itemsData.map((item) => (
        <ItemCard
        name = {item.name}
        symbol = {item.symbol}
        unicodeVal = {item.unicodeVal}
        />

        
       
      ))}

   
    </div>



    
  );
}

export default App;
