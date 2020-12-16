import contactsOperation from './redux/contacts/contactsOperation';
import selector from './redux/listSelector';
import ContactsView from './views/ContactsView';
import classes from './App.module.css';
import React, { Component, lazy, Suspense } from 'react';
import {BrowserRouter, Redirect, Route, Switch, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from './route';
import UserMenu from "./components/UserMenu/UserMenu"
import authOperations from "./redux/auth/authOperations"

const AsynkHomeView = lazy(() => import('./views/HomeView'));
const AsynkLoginView = lazy(() => import('./views/LoginView'));
const AsynkRegisterView = lazy(() => import('./views/RegisterView'));
const AsynkContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    console.log(JSON.parse(localStorage.getItem('persist:auth')));
    return (
      <>

      <BrowserRouter>
      <Suspense fallback={<h3>Loading...</h3>}>
       {this.props.isAuthenticated && <UserMenu/>}



            <Switch>
            <Route
              exact
              path={routes.HomeView}
              component={AsynkHomeView}
            />
            <Route
              exact
              path={routes.LoginView}
              component={AsynkLoginView}
            />
            <Route
              exact
              path={routes.ContactsView}
              component={AsynkContactsView}
            />
            <Route
              path={routes.RegisterView}
              component={AsynkRegisterView}
            />
            <Redirect to="/" />
          </Switch>
        </Suspense>
        </BrowserRouter>
      </>
    );
  }
}
const mapStateToProps=state=>({
  isAuthenticated: state.auth.token,
})

export default connect(mapStateToProps, {
  onGetCurrentUser: authOperations.getCurrentUser,

})(App);

