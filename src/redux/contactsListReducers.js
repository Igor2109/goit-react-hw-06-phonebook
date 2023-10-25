const { createSlice } = require('@reduxjs/toolkit');
const init = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const INITIAL_STATE = {
  contacts: init,
  filter: '',
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addContacts(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContacts(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});
export const { setContacts, setFilter, addContacts, deleteContacts } =
  contactsSlice.actions;
export const contactsListReducer = contactsSlice.reducer;
