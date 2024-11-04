const TeamList = (props)=> {
    
   
      
    return (
        
        <ul>
            
           {props.team.map((teamMember)=>(
            <div>
                <img src ={teamMember.img} />
                <h1>{teamMember.name}</h1>
                <h2>price: {teamMember.price}</h2>
                <h2>str: {teamMember.strength}</h2>
                <h2>agi: {teamMember.agility}</h2>
                
            </div>
           ))}
        </ul>
    
    )
    }
    
    export default TeamList;