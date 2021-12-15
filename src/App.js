import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Section from './components/Section/Section';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitNewContact = data => {
    const newTodo = {
      name: data.name,
      number: data.number,
      id: uuid(),
    };

    this.setState(prevState => {
      const newContact = [newTodo, ...prevState.contacts];
      return { contacts: newContact };
    });
  };

  findDuplicate = newContactName => {
    if (!newContactName) {
      alert('The field cannot be empty!');
      return false;
    }
    const isDublicate = this.state.contacts.some(
      contact => contact.name === newContactName,
    );

    if (isDublicate) {
      alert('This Name already exist!' + newContactName);
      return false;
    }
    return true;
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  filterContacts = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  render() {
    const formattedContacts = this.state.filter.toLowerCase().trim();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(formattedContacts),
    );

    return (
      <>
        <Section title={'Phonebook'}>
          <ContactForm
            submitNewContact={this.submitNewContact}
            findDuplicate={this.findDuplicate}
          />
        </Section>

        <Section title={'Contacts'}>
          <Filter
            filter={this.state.filter}
            filterContacts={this.filterContacts}
          />

          <ContactList
            filteredContacts={filteredContacts}
            handleDelete={this.handleDelete}
          />
        </Section>
      </>
    );
  }
}
export default App;
