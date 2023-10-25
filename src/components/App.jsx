import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from '../components/App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { setFilter } from 'redux/filterSlice';

export const App = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const handleAddContact = userContacts => {
    const hasDuplicateContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === userContacts.name.toLowerCase() ||
        contact.number === userContacts.number
    );

    if (hasDuplicateContacts) {
      alert(
        `${userContacts.name} or ${userContacts.number} is already in contacts`
      );
      return;
    }
    dispatch(addContact(userContacts));
  };

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const getContactFromFilter = () => {
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactsList
        contacts={getContactFromFilter()}
        handleDelete={handleDelete}
      />
    </div>
  );
};
