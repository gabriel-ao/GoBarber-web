import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';


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

  return <Route {...rest} component={Component}/>
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
