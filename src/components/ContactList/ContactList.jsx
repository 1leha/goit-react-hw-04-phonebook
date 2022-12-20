import Contact from 'components/Contact';
import React from 'react';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, phone }) => (
        <Contact
          key={id}
          contactId={id}
          name={name}
          phone={phone}
          getContactId={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
