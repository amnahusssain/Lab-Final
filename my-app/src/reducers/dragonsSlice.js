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
    // Add a new reducer to handle booking a dragon
    dragonBooked: (state, action) => {
      const { dragonId } = action.payload;
      state.dragons = state.dragons.map((dragon) =>
        dragon.id === dragonId ? { ...dragon, reserved: true } : dragon
      );
    },
    // Add a new reducer to handle canceling a reservation
    reservationCanceled: (state, action) => {
      const { dragonId } = action.payload;
      state.dragons = state.dragons.map((dragon) =>
        dragon.id === dragonId ? { ...dragon, reserved: false } : dragon
      );
    },
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
// Remove this line as fetchDragons is already exported in the line below
// export { fetchDragons };

// Export the booking actions
export const { dragonBooked, reservationCanceled } = dragonsSlice.actions;

export default dragonsSlice.reducer;
