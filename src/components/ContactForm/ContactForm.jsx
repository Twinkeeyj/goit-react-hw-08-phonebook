import React, { Component } from 'react';
import classes from './ContactForm.module.css';
import { connect } from 'react-redux';
import newContact from '../../redux/contacts/contactsOperation';
import AnswerError from '../AnswerError/AnswerError';
import selector from "../../redux/listSelector"
import authOperations from "../../redux/auth/authOperations"

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    isVisible: false,
      };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const truly = this.props.list.some(
      contact => contact.name === this.state.name,
    );
    if (truly) {
      this.setState({
        isVisible: true,
      });
      setTimeout(() => {
        this.setState({
          isVisible: false,
        });
      }, 1500);
      return;
    }
    this.props.addContact({ ...this.state });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, isVisible } = this.state;

    return (
      <>
        <div>
          <AnswerError isVisible={isVisible}  />
        </div>

        <form
          className={classes.container}
          action=""
          onSubmit={this.handleSubmit}
        >
          <label className={classes.label} htmlFor="name">
            Name
          </label>
          <input
          required
            className={classes.input}
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={this.handleChange}
          />

          <label className={classes.label} htmlFor="number">
            Number
          </label>
          <input
          required
            className={classes.input}
            type="tel"
            name="number"
            placeholder="number"
            value={number}
            onChange={this.handleChange}
          />
          <input className="form-add"  type="submit" value="Add contact"  />

          <button className="form-out" type="button" onClick={this.props.onLogout}>
      Logout
    </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = state => ({
  list: selector.getForm(state),
});

const mapDispatchToProps = {
  addContact: newContact.addContact,
  onLogout: authOperations.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
