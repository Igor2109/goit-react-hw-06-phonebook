import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import css from '../components/App.module.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      {contacts.length > 0 && <ContactForm />}
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
