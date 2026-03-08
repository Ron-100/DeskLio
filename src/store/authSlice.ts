import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {Models} from 'appwrite'

interface Authstate {
    status:boolean | null;
    data: Models.User<Models.Preferences> | null;
}

const initialState:Authstate = {
    status:null,
    data:null
}

const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setUserInfo:(state,action: PayloadAction<Models.User<Models.Preferences>>)=>{
            state.status = true
            state.data = action.payload
        },
        clearInfo:(state)=>{
            state.status = false
            state.data = null
        }
    }
})


export const {setUserInfo , clearInfo} = AuthSlice.actions
export default AuthSlice.reducer



//////////////////////
// those are used when test the values are working by store 

// interface User {
//     name?:string;
//     email?:string;
//     password?:string
// }

// data?: User | null;

/*PayloadAction<User>*/
//////////////////////