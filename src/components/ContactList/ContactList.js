import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ filteredContacts, handleDelete }) => {
  return (
    <div className={s.mainContainer}>
      <ul>
        <p className={s.ContactList}>Contact List</p>
        {filteredContacts.map(contact => (
          <li className={s.newContact} key={contact.id}>
            <p className={s.newContactName}>
              {contact.name} : {contact.number}
            </p>
            <button
              type="button"
              className={s.btn}
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
