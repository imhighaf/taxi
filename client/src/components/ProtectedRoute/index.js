import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

// function ProtectedRoute({ children, auth, ...rest }) {
//     console.log('@@@', auth)
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           auth ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }




const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
  console.log('route auth', rest)
  return (
    <Route {...rest} render={(props) => (
      auth
        ? <Component {...props} />
        : (<Redirect to={{
          pathname: '/login',
          state: { fromRedirect: true }
        }} />)
    )} />
  )
}
function mapStatetToProps({ auth }) {
  return { auth }
}

export default connect(mapStatetToProps)(ProtectedRoute)