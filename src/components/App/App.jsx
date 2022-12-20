import React, { useState, useEffect } from 'react';
import { AiOutlineClear } from 'react-icons/ai';

import localeStoregeApi from '../../localeStorageApi/';
import { message } from '../settings';

import { Box } from 'components/Box';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
//dsoifusdoiafusoadipfuoasidfuyuiosadyfiusda]
import {
  AppStyled,
  AppTitleStyled,
  ClearButtonStyled,
  VersionStyled,
} from './App.styled';

// Hooked App
export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const isContactExist = abonentName => {
    return contacts.find(({ name }) => name === abonentName);
  };

  const onSubmit = ({ id, name, phone }) => {
    if (isContactExist(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(contacts => [{ id, name, phone }, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const clearFilter = () => {
    setFilter('');
  };

  //!-------------------------------
  //!    LocaleStorage operation
  //!-------------------------------

  // ComponentDidMount analog
  useEffect(() => {
    const savedContacts = localeStoregeApi.readContacts();

    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  // ComponentDidUpdate analog
  useEffect(() => {
    localeStoregeApi.writeContacts(contacts);
  }, [contacts]);

  // Use messages
  const { isEmptyBook, noMatches } = message;

  const filterNormalized = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterNormalized)
  );

  const isPhonebookEmpty = contacts.length === 0;
  const isFilteredContactsEmpty = filteredContacts.length === 0;

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      fontSize="l"
      color="primary"
    >
      <Box position="relative">
        <AppTitleStyled>My phonebook</AppTitleStyled>
        <VersionStyled>LocaleStorage Mode. Hooks Mode</VersionStyled>
      </Box>

      <AppStyled>
        <Section title="Contacts editor">
          <ContactForm onSubmit={onSubmit} />
        </Section>

        <Section title="Contacts">
          <ClearButtonStyled
            type="button"
            aria-label="Clear all contacts"
            disabled={contacts.length === 0}
            onClick={() => {
              setContacts([]);
            }}
          >
            <AiOutlineClear size="30" />
          </ClearButtonStyled>
          {isPhonebookEmpty ? (
            <Notification message={isEmptyBook} />
          ) : (
            <>
              <Filter
                filterString={filter}
                onChange={handleChangeFilter}
                clearFilter={clearFilter}
                noContactsFiltred={isFilteredContactsEmpty}
              />

              {isFilteredContactsEmpty ? (
                <Notification message={noMatches} />
              ) : (
                <ContactList
                  contacts={filteredContacts}
                  onDeleteContact={deleteContact}
                />
              )}
            </>
          )}
        </Section>
      </AppStyled>
    </Box>
  );
};
