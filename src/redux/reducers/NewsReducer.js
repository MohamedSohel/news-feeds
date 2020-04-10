import initialState from './InitialState';
import {
  SET_ALL_NEWS,
} from '../action/ActionType';

const NewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_NEWS: {
      return {
        ...state,
        allNews: action.item,
      };
    }
    default:
      return state;
  }
};
export default NewsReducer;
