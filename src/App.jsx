import React, { useState, useEffect } from 'react';
import './App.css'
import HeroList from'./Components/HeroList'
import  data  from './assets/data1.json'

const App = () => {
  const [heroes, setUsers] = useState([]);
  useEffect(() => {setUsers(data);
}, []);

return (
  <div>
    <h1>SuperHeroes</h1>
    <HeroList heroes={heroes}/>
  </div>
);
};
export default App;

/*export default function App() {
  return (
    <main>
      <div>
        <h1>Cards with SuperHeroes</h1>
      </div>
      <div className='cardCont'>
        <HeroCard {...data[0]} />
        <HeroCard {...data[1]} />
        <HeroCard {...data[2]} />
        <HeroCard {...data[3]} />
        <HeroCard {...data[4]} />
        <HeroCard {...data[5]} />
        <HeroCard {...data[6]} />
        <HeroCard {...data[7]} />
        <HeroCard {...data[8]} />
        <HeroCard {...data[9]} />
      </div>
    </main>
  );*/