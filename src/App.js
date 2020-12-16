
import React, { Component, lazy, Suspense } from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import routes from './route';
import UserMenu from "./components/UserMenu/UserMenu"
import authOperations from "./redux/auth/authOperations"
import Loader from "./components/loading/loading"

const AsynkHomeView = lazy(() => import('./views/HomeView'));
const AsynkLoginView = lazy(() => import('./views/LoginView'));
const AsynkRegisterView = lazy(() => import('./views/RegisterView'));
const AsynkContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    if(this.props.isAuthenticated){
      this.props.onGetCurrentUser();

      return
    }

  }
  render() {

    return (
      <>

      <BrowserRouter>
      <Suspense fallback={<><Loader/><h3>Loading...</h3></>}>
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
            <Redirect to="/goit-react-hw-08-phonebook" />
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

