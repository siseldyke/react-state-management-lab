// import handleAddFighter from './src/App.jsx'

const ZombieFighterList = (props)=> {
    
   
      
return (
    
    <ul>
        
       {props.zombieFighters.map((zombieFighter)=>(
        <div>
            <img src ={zombieFighter.img} />
            <h2>{zombieFighter.name}</h2>
            <h2>price: {zombieFighter.price}</h2>
            <h2>str: {zombieFighter.strength}</h2>
            <h2>agi: {zombieFighter.agility}</h2>
            <button onClick={()=>{props.handleAddFighter(zombieFighter)}}>Add Fighter</button>
            
        </div>
       ))}
    </ul>

)
}

export default ZombieFighterList;