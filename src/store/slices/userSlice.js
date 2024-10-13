import {createSlice} from '@reduxjs/toolkit'
import {getTopUsersRequest, getUserInfoRequest} from '@/api/requests/user'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    topUsersList: []
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
    setTopUsersList: (state, action) => {
      state.topUsersList = action.payload
    }
  }
})

export const getUserInfo = () => async dispatch => {
  try {
    return getUserInfoRequest()
      .then(response => {
        if (response.status === 200) {
          dispatch(setUserInfo(response.data?.data))
        }
        return response
      })
      .catch(e => {
        return e
      })
  } catch (e) {
    throw e
  }
}
export const getTopUsersList = () => async dispatch => {
  try {
    return getTopUsersRequest()
      .then(response => {
        if (response.status === 200) {
          dispatch(setTopUsersList(response.data?.data))
        }
        return response
      })
      .catch(e => {
        return e
      })
  } catch (e) {
    throw e
  }
}

export const {setUserInfo, setTopUsersList} = userSlice.actions
