import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../store/actions'
import Smurf from './Smurf'

const Village = ({ smurfs, isLoading, getSmurfs }) => {

    useEffect(() => {
        getSmurfs()
    }, [getSmurfs])

    return (
        <div className='container village'>
            <h2>Welcome to Smurf Village</h2>
            {isLoading && <h3>Calling smurfs. Please be patient.</h3>}
            {!isLoading && smurfs && smurfs.map(smurf => <Smurf key={smurf.id} smurf={smurf}  />)}
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { getSmurfs })(Village)