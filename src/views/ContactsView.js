import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import classes from '../App.module.css';


import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { connect } from 'react-redux';
import contactsOperations from "../redux/contacts/contactsOperation"
import UserMenu from "../components/UserMenu/UserMenu"


 class ContactsView extends Component {
  componentDidMount(){
    if(!this.props.isAuthenticated){
      this.props.history.replace("/")

      return
    }
    this.props.onFetchContact()
  }
  componentDidUpdate(){
    if(!this.props.isAuthenticated){
      this.props.history.replace("/")

      return
    }
  }

  render() {
    return (
      <div className={classes.container}>
  {this.props.isAuthenticated && <UserMenu/>}
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
      </div>
    )
  }
}
const mapStateToProps=state=>({
  isAuthenticated: state.auth.token,
})

const mapDispatchToProps={
  onFetchContact: contactsOperations.fetchContact
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);