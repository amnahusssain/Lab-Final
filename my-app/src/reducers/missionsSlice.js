// src/reducers/missionsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// SpaceX API endpoint for missions
const MISSIONS_API_ENDPOINT = 'http://api.spacexdata.com/v3/missions';

// Async thunk for fetching missions from SpaceX API
export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  try {
    const response = await fetch(MISSIONS_API_ENDPOINT);
    const data = await response.json();
    return data;
  } catch (error) {
    // Handle error if fetching fails
    throw Error('Failed to fetch missions');
  }
});

const missionsSlice = createSlice({
  name: 'missions',
  initialState: {
    missions: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Other synchronous actions can be defined here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = action.payload;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the asynchronous action creator for use in components
export { fetchMissions };

export default missionsSlice.reducer;
