//ACTIONS
import axios from 'axios'

export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE"

export const getSmurfs = () => dispatch => {

    dispatch({ type: GET_SMURFS_START })

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type:GET_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('ERROR AXIOS CALL')
        })
}