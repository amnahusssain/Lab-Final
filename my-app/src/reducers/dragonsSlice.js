// src/reducers/dragonsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// SpaceX API endpoint for dragons
const DRAGONS_API_ENDPOINT = 'http://api.spacexdata.com/v4/dragons';

// Async thunk for fetching dragons from SpaceX API
export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  try {
    const response = await fetch(DRAGONS_API_ENDPOINT);
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle error if fetching fails
    throw Error('Failed to fetch dragons');
  }
});

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState: {
    dragons: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Other synchronous actions can be defined here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = action.payload;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the asynchronous action creator for use in components
export { fetchDragons };

export default dragonsSlice.reducer;
