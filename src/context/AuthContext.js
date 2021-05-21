import createDataContext from './createDataContext';
import trackerApi from '../api/Tracker';
//import AsyncStorage from "@react-native-community/async-storage";
//import EncryptedStorage from 'react-native-encrypted-storage';

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error' :
            return { ...state, errorMessage: action.playload }
        case 'signup' :
            return { errorMessage: '', token: action.payload }
        default :
            return state;
    }
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup',{ email, password });
        //await AsyncStorage.setItem('token',response.data.token);
        //await EncryptedStorage.setItem('token',response.data.token);
        console.log('Token:  ' + response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });
        // navigate to main flow
    } catch(err) {
        dispatch({ type: 'add_error', playload: 'something went wrong with signup' });
    }
};

const signin = (dispatch) => {
    return ({ email, password }) => {
        // make api request to signin with email and password

        // if we signin, modify out state, and say that we are authenticated

        // if signing up fails, we probably need to reflect an error message
        // somewhere
    };
};


const signout = (dispatch) => {
    return () => {
        // make api request to signout 
    };
};

export const { Provider, Context} = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' }
);