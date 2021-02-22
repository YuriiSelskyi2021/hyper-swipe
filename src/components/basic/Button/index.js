import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const Button = ({ vertical, children, className, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames('button', className, vertical && 'vertical')}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  children: null,
  className: '',
  vertical: false,
  onClick: null,
};

export default Button;
