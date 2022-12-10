import { createSlice } from '@reduxjs/toolkit'

import type { RootState } from './store'
import { drugsInfo } from '../interfaces/interface'

const initialState:{ drugValues: drugsInfo[] } = {
  drugValues:[],
}

export const drugSlice = createSlice({
  name: 'drugs',
  initialState,
  reducers: {
    addDrug: (state, action) => {
      state.drugValues.push(action.payload);
    },
  },
})

export const { addDrug } = drugSlice.actions;
export default drugSlice.reducer;
// Other code such as selectors can use the imported `RootState` type
export const selectDrugs = (state: RootState) => state.drugs.drugValues

