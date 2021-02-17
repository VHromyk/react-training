import React from 'react';
import styles from './Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({ text, type }) => (
  <div className={styles[type]}>{text}</div>
);

Notification.defaultProps = {
  type: 'success',
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['succes', 'error']),
};

export default Notification;
