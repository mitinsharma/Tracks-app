import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch(action.type) {
        default :
            return state;
    }
}

const signup = (dispatch) => {
    return ({ email, password }) => {
        // make api request to signup with email and password

        // if we signup, modify out state, and say that we are authenticated

        // if signing up fails, we probably need to reflect an error message
        // somewhere
    };
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
    { isSignedIn: false }
);