// import handleAddFighter from './src/App.jsx'

const ZombieFighterList = (props)=> {
    const {zombieFighter} = props
    const handleAddFighter  =(addZombieFighter) =>{
        const newFighterArray= [...team, addZombieFighter]
        setZombieFighters(newFighterArray)
      }
return (
    
    <ul>
        <li><img src ={zombieFighter.img} alt ={zombieFighter.name}/></li>
        <li>{zombieFighter.name}</li>
        <li>Price: {zombieFighter.price}</li>
        <li>Strength: {zombieFighter.strength}</li>
        <li>Agility: {zombieFighter.agility}</li>
        
        <li><button onClick={() => handleAddFighter({zombieFighter})}>Add</button></li>
    </ul>

)
}

export default ZombieFighterList;