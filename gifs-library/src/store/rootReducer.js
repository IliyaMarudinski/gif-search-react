import {combineReducers} from 'redux'
import {reducer as gifsReducer} from './reducers/gifsReducer'

const rootReducer = combineReducers({
    gifsReducer
})

export default rootReducer