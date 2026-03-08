import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type { ProjectDocument } from '../type/type'

type DataType = ProjectDocument

interface TableData {
    data:DataType[]
}

const initialState: TableData  = {
    data:[]
}

const addProjectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{
        addProject:(state, action: PayloadAction<DataType>) => {
            state.data.push(action.payload)
        },
        setPojects:(state,action: PayloadAction<DataType[]>) => {
            state.data = action.payload
        },
        deletePoject: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter((project) =>  project.$id !== action.payload);
        },

    }
})


export const {addProject, setPojects, deletePoject} = addProjectSlice.actions;
export default addProjectSlice.reducer;