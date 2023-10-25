import { useDispatch, useSelector } from 'react-redux';
import css from './ContactsList.module.css';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const getContactFromFilter = () => {
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filterContacts;
  };
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const contactsFilter = getContactFromFilter();
  return (
    <ul className={css.list}>
      {contactsFilter.map(contact => {
        const { id, name, number } = contact;
        return (
          <li className={css.contacts} key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button
              type="button"
              className={css.btnDelete}
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
