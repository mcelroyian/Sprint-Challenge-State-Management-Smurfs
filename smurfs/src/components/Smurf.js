import React from 'react'

const Smurf = props => {
    return (
        <div className='tile smurf'>
            <h3>{props.smurf.name}</h3>
            <p>Height: {props.smurf.height}</p>
            <p>Age: {props.smurf.age}</p>   
        </div>
        
    )
}
export default Smurf