import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Container } from './components/Container/Container';
import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';
import { Notification } from './components/Notification/Notification';
import { Input } from './components/Input/Input';

import { H1Styled, H2Styled } from './App.styles';

const App = () => {
  const storageContacts = window.localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(storageContacts);

  const [contacts, setContacts] = useState(parsedContacts ?? []);
  const [filter, setFilter] = useState('');

  const getContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filter.toLowerCase()),
    );
  };

  const addContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
      )
    ) {
      alert(
        'You have contact with this name, please remove old contact and create new',
      );
      return;
    }

    setContacts([newContact, ...contacts]);
  };

  const removeContact = data => {
    setContacts(contacts.filter(contact => contact.id !== data));
  };

  const changeFilterValue = evt => {
    setFilter(evt.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const mainContacts = getContacts();

  return (
    <Container>
      <H1Styled>PhoneBook</H1Styled>
      <H2Styled>Add contact</H2Styled>
      <ContactForm onSubmit={addContact} />

      <H2Styled>Contacts</H2Styled>
      {mainContacts.length > 0 ? (
        <>
          {/* Filter */}
          <Input
            id={uuidv4()}
            label={'Find contacts by name'}
            placeholder={'Boris Britva'}
            name={'search'}
            value={filter}
            onChange={changeFilterValue}
          />

          <ContactList contacts={mainContacts} onRemoveContact={removeContact} />
        </>
      ) : (
        <Notification text={'You don`t have any contacts'} />
      )}
    </Container>
  );
};

export default App;
