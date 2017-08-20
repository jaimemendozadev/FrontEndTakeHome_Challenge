import {FEED} from '../actions/index.jsx';

export default (state = [], action) => {
  console.log("the action is ", action.payload)
  switch(action.type){
    case FEED:
      return action.payload.data;
  }

  return state;
}




