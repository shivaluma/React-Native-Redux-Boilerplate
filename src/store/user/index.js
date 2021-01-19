/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'services'
// import AsyncStorage from '@react-native-async-storage/async-storage'



// Actions

export const signin = createAsyncThunk(
  'users/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const res = await API.post('user/login', {
        username,
        password,
      })

      return res.data;
    } catch (err) {
      if (!err.response) {
        throw err
      }
      return rejectWithValue(err.response.data)
    }
  },
)


const userSlice = createSlice({
  name: 'user',
  initialState: {
    loggedIn: false,
    user: null,
  },
  reducers: {
    setUser(_, action) {
      return action.payload
    },
    removeUser() {
      return null
    },
  },
  extraReducers: {
    [signin.fulfilled]: (state, action) => {
      state.loggedIn = true
      state.user = action.payload
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer

