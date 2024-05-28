
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// quick lab 8 - state in react
import { useState, useEffect } from 'react';
import Navbar from './components/navbar'
import './App.css';
import itemsData  from './itemsData'
import Item from './components/items';
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
import Logging from './components/Logging';
import CountingConfetti from './components/CountingConfetti';
import ExternalDogAPI from './components/ExternalDogApi';
import CollectData from './components/CollectData';
import CreateAnimal from './components/CreateAnimal';
import CreateUsers from './components/CreateUsers';
import ItemCard from './components/ItemCard'
import CartList from './components/CartList'
import ItemsList from './components/ItemList'
import { CartProvider } from './context/cart-context'



function App() {
 


// for UseState
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

        <hr/>
         <br/>
{/* 
         quick lab 13  context - adding items to cart 
         3 components itemlist, itemcard cartlist, 
         1 data file itemsdata.json
         context folder with cart-context*/}

         <h1>React Fruit Market</h1>
          <CartProvider>
            <CartList />
            <ItemsList />
          </CartProvider>

            

         <hr/>
         <br/>

         <Logging/>

         <hr/>
         <br/>

{/* lab 10 - useeffect &  */}
         
         <CountingConfetti />


{/* 
         lab 11 - API */}

        <hr/>
         <br/>

         <ExternalDogAPI />

         <hr/>
         <br/>

         <CollectData />

         <hr/>
         <br/>

         <CreateAnimal />

         <hr/>
         <br/>

         {/* quick lab 12 */}

        <CreateUsers />

        <hr/>
         <br/>

        <ChangeState />

        <hr/>
         <br/>

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
        <Item
        name = {item.name}
        symbol = {item.symbol}
        unicodeVal = {item.unicodeVal}
        />

        
       
      ))}

   
    </div>



    
  );
}

export default App;
