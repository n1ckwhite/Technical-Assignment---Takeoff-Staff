import { Dispatch } from "react";
import { combineReducers } from "redux";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  GET_CONTACTS_ERROR,
  GET_CONTACTS_REQUEST,
  GET_CONTACTS_SUCCESS,
} from "../action";

export interface IItem {
  name: string;
  username: string;
  email: string;
  id: string;
}

const initialState = {
  contacts: [],
  request: false,
  error: false,
  success: false,
};
interface IState {
  contacts: Array<IItem>
  request: boolean,
  error: boolean,
  success: boolean,
}

interface IRequest {
  readonly type: typeof GET_CONTACTS_REQUEST;
}

interface ISuccess {
  readonly type: typeof GET_CONTACTS_SUCCESS;
  contacts: Array<Object>;
  contact: Array<Object>;
}

interface IError {
  readonly type: typeof GET_CONTACTS_ERROR;
  error: boolean;
}

interface IAddContatc {
  readonly type: typeof ADD_CONTACT;
  card: IItem;
}

interface IDeleteContact {
  readonly type: typeof DELETE_CONTACT;
  indx: string;
}

interface IEditContact {
  readonly type: typeof EDIT_CONTACT;
  card: IItem;
}

export type TACtion =
  | IRequest
  | ISuccess
  | IError
  | IAddContatc
  | IDeleteContact
  | IEditContact
  | any;

  export type AppDispatch = Dispatch<TACtion>



const contactsReducer = (state: IState = initialState, action: TACtion) => {
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
        contacts: [...action.contact],
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
        contacts: [action.card, ...state.contacts],
      };
    }
    case DELETE_CONTACT: {
      const newState = { ...state };
      const indexIngredient = newState.contacts.findIndex(
        (item: IItem) => item.id === action.indx
      );
      if (indexIngredient !== -1) {
        newState.contacts.splice(indexIngredient, 1);
      }
      return {
        ...state,
        contacts: [...newState.contacts],
      };
    }
    case EDIT_CONTACT: {
      const newState = { ...state };
      newState.contacts.shift();

      return {
        ...state,
        contacts: [action.card, ...newState.contacts],
      };
    }
    default: {
      return state;
    }
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
});
