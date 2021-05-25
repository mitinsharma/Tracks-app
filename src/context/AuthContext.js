import createDataContext from './createDataContext';
import trackerApi from '../api/Tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../NavigationRef';

let token = null;

const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error' :
            return { ...state, errorMessage: action.playload };
        case 'clear_message' :
            return { ...state, errorMessage: '' };
        case 'signup' :
            return { errorMessage: '', token: action.payload };
        case 'signin' :
            return { errorMessage: '', token: action.payload };
        case 'signout' :
            return { errorMessage: '', token: '' };
        default :
            return state;
    }
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signup',{ email, password });
        await AsyncStorage.setItem('token',response.data.token);
        dispatch({ type: 'signup', payload: response.data.token });
        navigate('TrackList');
    } catch(err) {
        dispatch({ type: 'add_error', playload: 'something went wrong with signup' });
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_message' });
}

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin',{ email, password });
        await AsyncStorage.setItem('token',response.data.token);
        dispatch({ type: 'signin', payload: response.data.token});
        navigate('TrackList');
    } catch(err) {
        dispatch({ type: 'add_error', playload: 'something went wrong with signin' });
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token) {
        dispatch({ type: 'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('Signin');
    }
}

const signout = dispatch => async() => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('loginFlow');
};

export const { Provider, Context} = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: token, errorMessage: '' }
);