import {combineReducers} from 'redux'
import MealsReducer from './MealsReducer'
import {reducer} from 'redux-form'
import userDataReducer from './userDataReducer'

export default combineReducers({
    meals:MealsReducer,
    user:userDataReducer,
    
    form:reducer
})
 