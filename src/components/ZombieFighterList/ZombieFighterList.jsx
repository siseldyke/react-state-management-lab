

const ZombieFighterList = (props)=> {
    const {zombieFighter} = props
return (
    
    <ul>
        <li><img src ={zombieFighter.img} alt ={zombieFighter.name}/></li>
        <li>{zombieFighter.name}</li>
        <li>Price: {zombieFighter.price}</li>
        <li>Strength: {zombieFighter.strength}</li>
        <li>Agility: {zombieFighter.agility}</li>
        
        <li><button>Add</button></li>
    </ul>

)
}

export default ZombieFighterList;