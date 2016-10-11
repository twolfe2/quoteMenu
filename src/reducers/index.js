import { combineReducers } from 'redux';
import * as actions from '../actions';

const filterInitialState = {
  activeTab: 'topStories',
  scoreLimit: 200
};
const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case actions.UPDATE_SCORE_LIMIT:
      return {
        ...state,
        scoreLimit: action.newScoreLimit
      }
    case actions.SWITCH_TAB:
      return {
        ...state,
        activeTab: action.newTab
      }
    default:
      return state;
  }
};



export default combineReducers({
  filter: filterReducer,
});
