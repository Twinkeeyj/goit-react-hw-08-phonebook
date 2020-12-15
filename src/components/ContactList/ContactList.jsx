import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './ContactList.module.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import contactsOperation from '../../redux/contacts/contactsOperation';
import selector from "../../redux/listSelector"

class ContactList extends Component {
  render() {
     return (
      <>
        <TransitionGroup component="ul" className={classes.container}>
          {this.props.list.map(el => {
            return (
              <CSSTransition key={el.id} classNames="showbutton" timeout={250}>
                <li key={el.id} className={classes.list}>
                  {el.name} : {el.number}
                  <button
                    className={classes.button}
                    type="button"
                    onClick={() => this.props.Delete(el.id)}
                  >
                    Удалить
                  </button>
                </li>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
      </>
    );
  }
}

ContactList.propTypes = {
  Delete: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  list: selector.getList(state),
});
const mapDispatchToProps = {
  Delete: contactsOperation.removeContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
