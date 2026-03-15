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
        updateProjectStatus: (state, action) => {
            const { id, status } = action.payload
            const project = state.data.find(p => p.$id === id)
            if(project){
                project.status = status
            }
        },
        deletePoject: (state, action: PayloadAction<string>) => {
            state.data = state.data.filter((project) =>  project.$id !== action.payload);
        },

    }
})


export const {addProject, setPojects, deletePoject, updateProjectStatus} = addProjectSlice.actions;
export default addProjectSlice.reducer;