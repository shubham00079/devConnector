import React, { Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './components/layout/Landing';
import NavBar from './components/layout/NavBar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import Alert from './components/layout/Alert';
import setAuthToken from './utils/setauthToken';
import { loadUser } from './actions/auth';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // verify if token is present i.e user logged in then load data
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <section className="container">
            <Alert />
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route element={<PrivateRoute />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
