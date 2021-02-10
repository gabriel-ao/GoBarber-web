import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Authlayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const signed = true;

  // verificando se está logado, se não retorna para login
  if(!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // verificando se o usuario esta logado e é enviado para o dashboard
  if(signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : Authlayout

  return (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props}/>
      </Layout>
    )} />
  );
}


RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]).isRequired
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
