//ACTIONS
import axios from 'axios'
const BASE_URL = 'http://localhost:3333/smurfs'

export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"
//export const GET_SMURFS_FAILURE = "GET_SMURFS_FAILURE"

export const getSmurfs = () => dispatch => {

    dispatch({ type: GET_SMURFS_START })

    axios
        .get(BASE_URL)
        .then(res => {
            dispatch({ type:GET_SMURFS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log('ERROR AXIOS CALL')
        })
}

export const POST_SMURF_START = "POST_SMURF_START"
export const POST_SMURF_SUCCESS = "POST_SMURF_SUCCESS"

export const postSmurf = smurf => dispatch => {
    dispatch({ type: POST_SMURF_START })

    axios
        .post(BASE_URL, smurf)
        .then(res => {
            dispatch({ type: POST_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.log(err)
        })
}