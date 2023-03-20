import { CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_LOADING, GET_NOTES_SUCCESS, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./note.type";

let initialState = {
  loading: false,
  error: false,
  data: [],
};

export const noteReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    // get notes
    case GET_NOTES_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };

    case GET_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: true,
      };

    // create notes
    case CREATE_NOTES_LOADING:
      return {
        ...state,
        loading: true,
      };

    case CREATE_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case CREATE_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: true,
      };

    // update notes
    case UPDATE_NOTES_LOADING:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case UPDATE_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: true,
      };

    // delete notes
    case DELETE_NOTES_LOADING:
      return {
        ...state,
        loading: true,
      };

    case DELETE_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
      };

    case DELETE_NOTES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
