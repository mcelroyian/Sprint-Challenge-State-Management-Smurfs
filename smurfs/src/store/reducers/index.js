import {    GET_SMURFS_START, 
            GET_SMURFS_SUCCESS, 
            GET_SMURFS_FAILURE 
        } from '../actions'

const initialState = {
    isLoading: false,
    smurfs: []
}


export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return { ...state, isLoading: true, }
        case GET_SMURFS_SUCCESS:
            return { ...state, isLoading: false, smurfs: action.payload }
        default:
            return { ...state }
    }
}