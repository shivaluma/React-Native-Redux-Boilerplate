/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API } from 'services'
// import AsyncStorage from '@react-native-async-storage/async-storage'



// Actions

export const signin = createAsyncThunk(
  'users/login',
  async ({ email, password }, { rejectWithValue }) => {
    console.log(email, password);
    try {
     
      const res = await API.post('user/login', {
        email,
        password,
      })
      
      
      return res;
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
      state.user = action.payload
    },
   
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer

