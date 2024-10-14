import {
  getAllTopicRequest,
  getWordsByTopicRequest,
} from "@/api/requests/topic";
import { createSlice } from "@reduxjs/toolkit";

export const topicSlice = createSlice({
  name: "topic",
  initialState: {
    allTopicList: [],
    allTopicListMeta: null,
    currentTopic: null,
  },
  reducers: {
    setAllTopicListAction: (state, action) => {
      state.allTopicList = action.payload.data;
      state.allTopicListMeta = action.payload.meta;
    },
    appendAllTopicLisAction: (state, action) => {
      state.allTopicList = [...state.allTopicList, ...action.payload.data];
      state.allTopicListMeta = action.payload.meta;
    },
    setCurrentTopicAction: (state, action) => {
      state.currentTopic = action.payload.data;
    },
  },
});

export const getAllTopicList = (data) => async (dispatch) => {
  try {
    return getAllTopicRequest(data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setAllTopicListAction(response.data));
        }
        return response;
      })
      .catch((e) => {
        return e;
      });
  } catch (e) {
    throw e;
  }
};
export const appendAllTopicList = (data) => async (dispatch) => {
  try {
    return getAllTopicRequest(data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(appendAllTopicLisAction(response.data));
        }
        return response;
      })
      .catch((e) => {
        return e;
      });
  } catch (e) {
    throw e;
  }
};
export const getCurrentTopic = (data) => async (dispatch) => {
  try {
    return getWordsByTopicRequest(data)
      .then((response) => {
        if (response.status === 200) {
          dispatch(setCurrentTopicAction(response.data));
        }
        return response;
      })
      .catch((e) => {
        return e;
      });
  } catch (e) {
    throw e;
  }
};
export const {
  setAllTopicListAction,
  appendAllTopicLisAction,
  setCurrentTopicAction,
} = topicSlice.actions;
