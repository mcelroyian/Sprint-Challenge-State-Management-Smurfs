import React, { useState } from 'react'
import { connect } from 'react-redux'
import { postSmurf } from '../store/actions'

const Recruiter = ({ postSmurf }) => {

    const [newSmurf, setNewSmurf] = useState({name:'',height:'',age:''})

    const onChange = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        const mySmurf = {
            name: newSmurf.name,
            height: `${newSmurf.height}cm`,
            age: Number(newSmurf.age)
        }
        postSmurf(mySmurf)
    }

    return (
        <div>
            <h2>Recruit a Smurf from another village:</h2>
            <form onSubmit={onSubmit} >
                <label htmlFor='name'>Name:</label>
                <input  type='text'
                        id='name' 
                        name='name' 
                        onChange={onChange} 
                        value={newSmurf.name} 
                /><br />
                <label htmlFor='height' >Height: in cm</label>
                <input  type='number' 
                        id='height' 
                        name='height' 
                        onChange={onChange}  
                        value={newSmurf.height}             
                /><br />
                <label htmlFor='age'>Age:</label>
                <input  type='number' 
                        id='age' 
                        name='age' 
                        onChange={onChange} 
                        value={newSmurf.age} 
                /><br />
                <button>Recruit Smurf</button>
            </form>
        </div>
    )
}

const mapStateToProps = state =>{
    return {

    }
}

export default connect(null, { postSmurf })(Recruiter)