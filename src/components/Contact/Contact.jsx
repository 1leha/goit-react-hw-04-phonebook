import React from 'react';
import { MdDelete } from 'react-icons/md';

import { Box } from 'components/Box';

import { ContactButtonStyled } from './Contact.styled';

const Contact = ({ contactId, name, phone, getContactId }) => {
  const handelClick = () => {
    getContactId(contactId);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      {name}: {phone}
      <ContactButtonStyled
        type="button"
        aria-label="Delete contact"
        onClick={handelClick}
      >
        <MdDelete size="25" />
      </ContactButtonStyled>
    </Box>
  );
};

export default Contact;
