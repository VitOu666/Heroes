
import './App.css'
import HeroCard from'./Components/HeroCard'
import  data  from './assets/data'

export default function App() {
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
  )
}