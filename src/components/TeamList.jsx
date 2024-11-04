const TeamList = (props)=> {
    
   
      
    return (
        
        <ul>
            
           {props.team.map((teamMember)=>(
            <div>
                <img src ={teamMember.img} />
                <h2>{teamMember.name}</h2>
                <h2>price: {teamMember.price}</h2>
                <h2>str: {teamMember.strength}</h2>
                <h2>agi: {teamMember.agility}</h2>
                <button onClick={()=>{props.handleRemoveTeamMember(teamMember)}}>Remove</button>
            </div>
           ))}
        </ul>
    
    )
    }
    
    export default TeamList;