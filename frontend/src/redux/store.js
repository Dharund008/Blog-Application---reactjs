import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { userReducerSignUp, userReducerSignIn, userReducerProfile, userReducerLogout } from './reducers/UserReducer';
//combine reducers
const reducer = combineReducers({
    signUp: userReducerSignUp,
    signIn: userReducerSignIn,
    userProfile: userReducerProfile,    
    logOut: userReducerLogout
});



//initial state
let initialState = {
    signIn: {
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
} 

const middleware = [thunk];

const store = createStore(reducer , initialState , composeWithDevTools(applyMiddleware(...middleware)))

export default store;