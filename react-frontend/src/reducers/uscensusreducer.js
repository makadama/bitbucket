import {GET_INFOS } from '../actions/types';


const initialState = {
  infos: [],
  info: {},
  loading: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_INFOS:
      return {
        ...state,
        infos: action.payload,
        loading: false
      }  
    default:
      return state;
  }
}