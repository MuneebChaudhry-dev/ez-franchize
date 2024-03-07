import React from 'react';
import styles from './button.module.css'; // Make sure to import your CSS file

const Button = ({ children, className }) => {
  return (
    <button className={className ? className : styles.btnStyle}>
      {children}
    </button>
  );
};

export default Button;
