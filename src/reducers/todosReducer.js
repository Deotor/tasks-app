import { FETCH_TODOS, ADD_TODO, COMPL_TODO, DEL_TODO } from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TODOS:
      console.log("FETCH_TODOS");
      return {
        ...state,
        items: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        items: action.payload
      };
    case COMPL_TODO:
      return {
        ...state,
        items: action.payload
      };
    case DEL_TODO:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
