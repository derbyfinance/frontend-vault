import { createSlice } from '@reduxjs/toolkit';

const chainSlice = createSlice({
  name: 'chainSlice',
  initialState: {
    chains: [],
    selectedChainId: 1,
  },
  reducers: {
    fetchChains: (state, action) => {
      state.chains = action.payload;
    },
    selectChain: (state, action) => {
      state.selectedChainId = action.payload;
    },
  },
});

export const { fetchChains, selectChain } = chainSlice.actions;

export default chainSlice.reducer;
