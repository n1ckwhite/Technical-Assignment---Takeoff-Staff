import { combineReducers } from "redux";
import {
  ADD_CONTACT,
  GET_CONTACTS_ERROR,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
} from "../action";

const initialState = {
  contacts: [],
  request: false,
  error: false,
  success: false,
};

const contactsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_CONTACTS_REQUEST: {
      return {
        ...state,
        request: true,
      };
    }
    case GET_CONTACTS_SUCCESS: {
      return {
        ...state,
        success: true,
        contacts: [...action.contact]
      };
    }
    case GET_CONTACTS_ERROR: {
      return {
        ...state,
        error: true,
      };
    }
    case ADD_CONTACT: {
      return {
        ...state,
        contacts: [action.card,...state.contacts]
      }
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
