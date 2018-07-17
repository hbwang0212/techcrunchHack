import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  USERNAME_CHANGED,
  SIGNUP_USER,
  SIGNUP_USER_FAIL,
  LOGIN_USER
} from './types';

const config = {
  apiKey: 'AIzaSyAFwnn0vEvXqBUWjetuJVdtsjpj_fCEOe4',
  authDomain: 'yeah-1eddd.firebaseapp.com',
  databaseURL: 'https://yeah-1eddd.firebaseio.com',
  projectId: 'yeah-1eddd',
  storageBucket: '',
  messagingSenderId: '888572307589'
};
firebase.initializeApp(config);
this.itemsRef = firebase.database().ref(`/usernames`);

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const usernameChanged = (text) => {
  return {
    type: USERNAME_CHANGED,
    payload: text
  };
};


export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => loginUserFail(dispatch));
  };
};

export const signupUser = ({ username, email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch(() => function (message) {
      console.log(message);
    });
    Actions.main();
    // this.itemsRef.push({ user: username })
    // .then(() => {
    //   dispatch({ type: SIGNUP_USER });
    //   Actions.root();
    // })
    // .catch(() => signupUserFail(dispatch));
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const signupUserFail = (dispatch) => {
  dispatch({ type: SIGNUP_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};
