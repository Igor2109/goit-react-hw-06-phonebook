import css from './ContactsList.module.css';

export const ContactsList = ({ handleDelete, ...restProps }) => {
  return (
    <ul className={css.list}>
      {restProps.contacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => handleDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
