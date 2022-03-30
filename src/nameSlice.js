import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: ''
}

export const nameSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        saveName: (state, action) => {
            state.value = action.payload
        },
    }
})

export const {saveName} = nameSlice.actions 
export default nameSlice.reducer