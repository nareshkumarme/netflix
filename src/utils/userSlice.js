import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
  };

const userSlice = createSlice({
    name:'user',
    initialState,
    userName:null,
    reducers:{
        addUser(state,action) {
            state.userName = action.payload
          
        },

        removeUser(state,action) {
            state.userName = null;
        }
    }
})



export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;