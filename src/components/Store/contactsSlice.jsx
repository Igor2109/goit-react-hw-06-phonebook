import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    saveFilter: (state, { payload }) => {
      state.filter = payload;
    },
    saveContact: (state, { payload }) => {},
    delContact: (state, { payload }) => {},
  },
});

// Action creators are generated for each case reducer function
export const { saveFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
