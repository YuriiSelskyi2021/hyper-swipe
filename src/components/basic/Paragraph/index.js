import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const Paragraph = ({ children, className }) => {
  return <p className={classNames('paragraph', className)}>{children}</p>;
};

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
Paragraph.defaultProps = {
  children: null,
  className: '',
};

export default Paragraph;
