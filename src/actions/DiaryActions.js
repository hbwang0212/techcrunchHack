import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  DIARY_UPDATE,
  DIARY_CREATE,
  DIARY_FETCH_SUCCESS,
  DIARY_SAVE_SUCCESS
} from './types';

export const diaryUpdate = ({ prop, value }) => {
  return {
    type: DIARY_UPDATE,
    payload: { prop, value }
  };
};

export const diaryCreate = ({ title, text, image }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/diaries`)
      .push({ title, text, image })
      .then(() => {
        dispatch({ type: DIARY_CREATE });
        Actions.main();
      });
  };
};

export const diaryFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/diaries`)
      .on('value', snapshot => {
        dispatch({ type: DIARY_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const diarySave = ({ title, text, image, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/diaries/${uid}`)
      .set({ title, text, image })
      .then(() => {
        dispatch({ type: DIARY_SAVE_SUCCESS });
        Actions.diaryList({ type: 'reset' });
      });
  };
};

export const diaryDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/diaries/${uid}`)
      .remove()
      .then(() => {
        Actions.diaryList({ type: 'reset' });
      });
  };
};

