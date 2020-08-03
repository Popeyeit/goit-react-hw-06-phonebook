import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { removeItem } from '../../redux/contacts/contactsActions';
import './ContactList.css';
const ContactList = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className="list">
      {contacts.map(({ name, number, id }) => {
        return (
          <CSSTransition key={id} classNames="change" timeout={250}>
            <li className="item">
              <p className="list-name">{name} </p>
              <p className="list-phone">{number} </p>
              <button onClick={() => deleteContact(id)} className="list-btn">
                X
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  return {
    contacts: filter
      ? items.filter(item => {
          return item.name.toLowerCase().includes(filter.toLowerCase());
        })
      : items,
  };
};
const mapDispatchToProps = {
  deleteContact: removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
