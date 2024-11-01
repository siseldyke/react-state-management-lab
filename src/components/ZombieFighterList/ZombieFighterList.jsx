// import handleAddFighter from './src/App.jsx'

const ZombieFighterList = (props)=> {
    
   
      
return (
    
    <ul>
        
       {props.zombieFighters.map((zombieFighter)=>(
        <div>
            <h1>{zombieFighter.name}</h1>
            <button onClick={()=>{props.handleAddFighter(zombieFighter)}}>Add Fighter</button>
        </div>
       ))}
    </ul>

)
}

export default ZombieFighterList;