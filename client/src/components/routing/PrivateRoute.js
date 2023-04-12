import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';


// eslint-disable-next-line no-lone-blocks
{/* Private/Secured route work differently in v6, basically we use
OutLet over here. What it does is verifies if authenticated,
if yes loads child routes passed in parent component else refirects to 
giver URL  */} 

const PrivateRoute = ({ auth: { isAuthenticated, loading } }) => {
  return !isAuthenticated && !loading ? <Navigate to="/login" /> : <Outlet />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
