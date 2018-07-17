import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import diaryEditReducer from './diaryEditReducer';
import diaryGetReducer from './diaryGetReducer';

export default combineReducers({
  login: loginReducer,
  signup: signupReducer,
  diaryForm: diaryEditReducer,
  diaries: diaryGetReducer
});
