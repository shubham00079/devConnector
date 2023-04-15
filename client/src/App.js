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
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';


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
              <Route exact path="/profiles" element={<Profiles />} />
              <Route exact path="/profile/:id" element={<Profile />} />
              <Route element={<PrivateRoute />}>
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/create-profile" element={<CreateProfile />} />
                <Route exact path="/edit-profile" element={<EditProfile />} />
                <Route exact path="/add-experience" element={<AddExperience />} />
                <Route exact path="/add-education" element={<AddEducation />} />
              </Route>
            </Routes>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
