import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        message:[]
    },

    reducers:{
       addmessage:(state,action)=> {
        state.message.splice(25,1)
        state.message.push(action.payload);
       }
    },
})

export const {addmessage} = chatSlice.actions
export default chatSlice.reducer;