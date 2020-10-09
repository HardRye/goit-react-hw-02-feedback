import React from 'react'; // shortcut: rafc
import PropTypes from 'prop-types'; // impt

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
