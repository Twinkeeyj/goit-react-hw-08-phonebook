import React, { Component } from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import classes from './App.module.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import  contactsOperation from "./redux/contacts/contactsOperation"
import selector from "./redux/listSelector"


class App extends Component {
  componentDidMount() {
    this.props.onFetchContact()
  }

  render(){
    return (
      <>
      {this.props.isLodingContact && <h1>Loading....</h1>}
        <div className={classes.container}>
          <CSSTransition
            in={true}
            classNames="logo"
            timeout={250}
            appear={true}
            unmountOnExit
          >
            <h1>Phonebook</h1>
          </CSSTransition>
          <ContactForm />
          <h2>Contacts</h2>

          <Filter />

          <ContactList />
          {/* <CSSTransition
              in={isVisible}
              timeout={250}
              unmountOnExit
              classNames="answer"
            >
              <AnswerError answer={answer} />
            </CSSTransition> */}
        </div>
      </>
    );
  }

}

const mapStateToProps = state => ({
  isLodingContact: selector.getLoding(state),
});

const mapDispatchToProps={
  onFetchContact: contactsOperation.fetchContact
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
