import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: false,
  isSmallScreen: false,
  isBigScreen: false,
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    showSideNAv: (state) => {
      state.status = true
    },
    hideSideNAv: (state) => {
      state.status = false
    },
    setSmallScreen: (state, action) => {
      state.isSmallScreen = action.payload
    },
    setBigScreen: (state, action) => {
      state.isBigScreen = action.payload
    },
  },
})

export default navSlice.reducer;
export const NavSlice  = navSlice.actions
