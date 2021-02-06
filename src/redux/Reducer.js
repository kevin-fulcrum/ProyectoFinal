import Actions from '../resource/Actions';
import {combineReducers} from 'redux'

const initialState = {
  products: [],
  errors: '',
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SET_ORDER:
      return {
        ...state,
        products: action.data,
        errors: '',
      };
    case Actions.GET_ORDER:
        return {
        ...state,
        products: action.data,
        errors: '',
        };  
    default:
      return state;
  }
};

const getRootReducer =()=>{
    return combineReducers({
        ProductReducer, 
    })
}

export default getRootReducer;
