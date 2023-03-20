import axios from "axios";
// import { useSelector } from "react-redux";
import { BASE_URL } from "../../constants/config";
import { store } from "../store";
import {
  CREATE_NOTES_ERROR,
  CREATE_NOTES_LOADING,
  CREATE_NOTES_SUCCESS,
  DELETE_NOTES_ERROR,
  DELETE_NOTES_LOADING,
  DELETE_NOTES_SUCCESS,
  GET_NOTES_ERROR,
  GET_NOTES_LOADING,
  GET_NOTES_SUCCESS,
  UPDATE_NOTES_ERROR,
  UPDATE_NOTES_LOADING,
  UPDATE_NOTES_SUCCESS,
} from "./note.type";
const { token } = store.getState().userReducer
//getNotes
export const getNotes = () => async (distpatch) => {
  const { token } = store.getState().userReducer

  distpatch({ type: GET_NOTES_LOADING });
  try {
    const res = await axios(BASE_URL + "/note", {
      method: "get",
      headers: {
        Authorization: token,
      },
    });
    const { status, message, data } = res.data;
    console.log(message);
    if (status == 1) {
      distpatch({ type: GET_NOTES_SUCCESS, payload: data });
    } else {
      distpatch({ type: GET_NOTES_ERROR });
    }
  } catch (error) {
    distpatch({ type: GET_NOTES_ERROR });
  }
};

//createNotes
export const createNotes = (obj) => async (distpatch) => {
  const { token } = store.getState().userReducer

  distpatch({ type: CREATE_NOTES_LOADING });
  try {
    const res = await axios(BASE_URL + "/note/create", {
      method: "post",
      data: obj,
      headers: {
        Authorization: token,
      },
    });
    const { status, message } = res.data;
    console.log(message);
    if (status == 1) {
      distpatch({ type: CREATE_NOTES_SUCCESS });
    } else {
      distpatch({ type: CREATE_NOTES_ERROR });
    }
  } catch (error) {
    distpatch({ type: CREATE_NOTES_ERROR });
  }
};

//deleteNotes
export const deleteNotes = (id) => async (distpatch) => {
  const { token } = store.getState().userReducer

  distpatch({ type: DELETE_NOTES_LOADING });
  try {
    const res = await axios(BASE_URL + "/note/", {
      method: "delete",
      headers: {
        Authorization: token,
        id: id,
      },
    });
    const { status, message } = res.data;
    console.log(message);
    if (status == 1) {
      distpatch({ type: DELETE_NOTES_SUCCESS });
    } else {
      distpatch({ type: DELETE_NOTES_ERROR });
    }
  } catch (error) {
    distpatch({ type: DELETE_NOTES_ERROR });
  }
};

//updateNotes
export const updateNotes = (id, obj) => async (distpatch) => {
  distpatch({ type: UPDATE_NOTES_LOADING });
  try {
    const res = await axios(BASE_URL + "/note", {
      method: "patch",
      data: obj,
      headers: {
        Authorization: token,
        id: id,
      },
    });
    const { status, message, data } = res.data;
    console.log(message);
    if (status == 1) {
      distpatch({ type: UPDATE_NOTES_SUCCESS });
    } else {
      distpatch({ type: UPDATE_NOTES_ERROR });
    }
  } catch (error) {
    distpatch({ type: UPDATE_NOTES_ERROR });
  }
};
