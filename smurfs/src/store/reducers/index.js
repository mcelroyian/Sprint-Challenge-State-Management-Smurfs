import {    GET_SMURFS_START, 
            GET_SMURFS_SUCCESS, 
            POST_SMURF_START,
            POST_SMURF_SUCCESS
        } from '../actions'

const initialState = {
    isLoading: false,
    isWaiting: false,
    smurfs: []
}


export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return { ...state, isLoading: true, }
        case GET_SMURFS_SUCCESS:
            return { ...state, isLoading: false, smurfs: action.payload }
        case POST_SMURF_START:
            return { ...state, isWaiting: true, }
        case POST_SMURF_SUCCESS:
            console.log(action.payload)
            return { ...state, isWaiting: false, smurfs: action.payload }
        default:
            return { ...state }
    }
}