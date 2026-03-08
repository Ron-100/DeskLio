import {configureStore} from '@reduxjs/toolkit'
import authSliceReducer from '../store/authSlice'
import addProjectSliceReducer from '../store/addProjectSlice'

const store = configureStore({
    reducer:{
        auth:authSliceReducer,
        projects:addProjectSliceReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;