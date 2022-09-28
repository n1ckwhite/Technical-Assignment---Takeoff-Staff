import { TACtion } from "../reduce";
import { AppThunk, RootState } from "../types";

export const GET_CONTACTS_REQUEST: "GET_CONTACTS_REQUEST" =
  "GET_CONTACTS_REQUEST";
export const GET_CONTACTS_SUCCESS: "GET_CONTACTS_SUCCESS" =
  "GET_CONTACTS_SUCCESS";
export const GET_CONTACTS_ERROR: "GET_CONTACTS_ERROR" = "GET_CONTACTS_ERROR";
export const ADD_CONTACT: "ADD_CONTACT" = "ADD_CONTACT";
export const DELETE_CONTACT: "DELETE_CONTACT" = "DELETE_CONTACT";
export const EDIT_CONTACT: "EDIT_CONTACT" = "EDIT_CONTACT";

export const getContacts = (): AppThunk<void, RootState, unknown, TACtion> => {
  return (dispatch: (A:TACtion) => void) => {
  dispatch({
    type: GET_CONTACTS_REQUEST,
  });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        let error = new Error(response.statusText);
        throw error;
      }
    })
    .then((data) => {
      return dispatch({
        type: GET_CONTACTS_SUCCESS,
        contact: data,
      });
    })
    .catch((e) => {
      alert("Ошибка HTTP: " + e.message);
      dispatch({ type: GET_CONTACTS_ERROR });
    });
};

}