import React from 'react';
import classes from './notFound.module.css';
import { Link } from 'react-router-dom';
export default function NotFound({ message, linkRoute, linkText }) {
  return (
    <div className={classes.container}>
      {message}
      <Link to={linkRoute}>{linkText}</Link>
    </div>
  );
}

NotFound.defaultProps = {
  message: 'Nothing Found!',
  linkRoute: '/',
  linkText: 'Go To Home Page',
};
