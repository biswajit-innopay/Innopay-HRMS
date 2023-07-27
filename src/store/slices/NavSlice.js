import { createSlice } from '@reduxjs/toolkit'
const navSlice = createSlice({
  name: 'navdata',
  initialState: [],
  reducers: {
    addNavData(state, action) {
      state.push(action.payload)
    },
  },
})
export default navSlice.reducer
export const { addNavData } = navSlice.actions
