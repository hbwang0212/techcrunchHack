import {
  DIARY_UPDATE,
  DIARY_CREATE,
  DIARY_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  text: '',
  image: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DIARY_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case DIARY_CREATE:
      return INITIAL_STATE;
    case DIARY_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
