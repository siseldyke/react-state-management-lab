
import { useState } from 'react'
import './App.css'
import ZombieFighterList from './components/ZombieFighterList/ZombieFighterList.jsx'

const App = () => {
  const zombieFighters =[{
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  }]


    const [team, setTeam] = useState([])
    const [money, setMoney] = useState(100)
    const [totalStrength, setTotalStrength] =useState(0)
    const [totalAgility, setTotalAgility] =useState(0)
   
   
    const handleAddFighter =(fighter) => {

      const updatedTotal = money - fighter.price
      if (money < fighter.price) {
        console.log("Not enough money")
      } 
      setMoney(updatedTotal)

      const teamStrengthTotal = totalStrength + fighter.strength
      setTotalStrength(teamStrengthTotal)

      const teamAgilityTotal = totalAgility + fighter.agility
      setTotalAgility(teamAgilityTotal)

      const updatedTeam = [...team, fighter]
      setTeam(updatedTeam)

      
    }

    const handleRemoveFighter =(fighter) => {

      const updatedTotal = money + fighter.price
      setMoney(updatedTotal)

      const teamStrengthTotal = totalStrength - fighter.strength
      setTotalStrength(teamStrengthTotal)

      const teamAgilityTotal = totalAgility - fighter.agility
      setTotalAgility(teamAgilityTotal)

      const updatedTeam = [...team, fighter]
      setTeam(updatedTeam)

      
    }

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Total: {money}</h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <ZombieFighterList 
        zombieFighters={zombieFighters}
        handleAddFighter={handleAddFighter}
        handleRemoveFighter ={handleRemoveFighter}
      />
      <h2>Your Team</h2>
      
    </>
      
    )
    
    
   


  
}

export default App

