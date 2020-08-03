import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import {
  addContact,
  toggle,
  filterItems,
} from './redux/contacts/contactsActions';
import Form from './components/Form/Form';
import ContactList from './components/ContactList/ContactList';
import './App.css';
class App extends Component {
  state = {
    isLoade: false,
  };
  changeFilter = e => {
    this.props.filterItems(e.target.value);
  };
  findContact = () => {
    const { contacts, search } = this.state;
    if (search) {
      return contacts.filter(item => item.name.includes(search));
    }
    return contacts;
  };
  componentDidMount() {
    this.setState({ isLoade: true });
  }

  render() {
    const { isLoade } = this.state;
    const { contacts, hasNameInContacts, toggle, search } = this.props;
    return (
      <div>
        <CSSTransition
          classNames="phonebook"
          timeout={1500}
          in={isLoade}
          mountOnEnter
        >
          <div>
            <h1>Phonebook</h1>
          </div>
        </CSSTransition>
        <CSSTransition
          in={hasNameInContacts}
          classNames="alert"
          unmountOnExit
          timeout={2500}
          onEntered={() => toggle(false)}
        >
          <div className="alert-wrapper">
            <h1 className="alert-title">
              This name is have already in contacts list
            </h1>
          </div>
        </CSSTransition>
        <Form />
        <CSSTransition
          in={contacts.length > 1}
          unmountOnExit
          classNames="search"
          timeout={250}
        >
          <label className="form-label">
            <p>Find contacts by name:</p>
            <input
              type="text"
              name="search"
              value={search}
              onChange={this.changeFilter}
            />
          </label>
        </CSSTransition>

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  console.log(filter);
  console.log(items);
  return {
    contacts: items,
    hasNameInContacts: state.contacts.hasNameInContacts,
    search: state.contacts.filter,
  };
};
const mapDispatchToProps = {
  addContact,
  toggle,
  filterItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
