import React, { useState } from 'react'

const Smurf = props => {

    const initialSmurf = {
        id: props.smurf.id,
        name:props.smurf.name,
        height:props.smurf.height,
        age: props.smurf.height,
    }

    const [editing, setEditing] = useState(false)
    const [smurf, setSmurf] = useState(initialSmurf)

    const handleChanges = e => {
        setSmurf({ ...smurf, [e.target.name]: e.target.value })
    }

    return (
            <div className='tile smurf'>
            <h3>{props.smurf.name}</h3>
            <p>Height: {props.smurf.height}</p>
            <p>Age: {props.smurf.age}</p> 
            <button onClick={() => setEditing(true)}>Transmorgify</button>  
            </div>       
    )
}
export default Smurf