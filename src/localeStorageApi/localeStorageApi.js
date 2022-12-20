const LS_KEY = 'contacts';

const writeContacts = contacts => {
  const data = JSON.stringify(contacts);

  localStorage.setItem(LS_KEY, data);
};

const readContacts = () => {
  const savedContacts = localStorage.getItem(LS_KEY);

  if (!savedContacts) {
    console.log('LocaleStorage is empty!');
    return;
  }

  try {
    return JSON.parse(savedContacts);
  } catch (error) {
    console.log(error);
  }
};

const localeStorageAPI = {
  writeContacts,
  readContacts,
};

export default localeStorageAPI;
