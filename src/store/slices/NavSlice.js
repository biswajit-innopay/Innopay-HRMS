import { createSlice } from '@reduxjs/toolkit'
const navSlice = createSlice({
  name: 'navdata',
  initialState: [],
  reducers: {
    getNavData(state, action) {},
  },
})
console.log('hi')
export default navSlice.reducer
