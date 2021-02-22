import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TITLE_TYPES } from 'constants/base.constants';
import './index.scss';

const Title = ({ Type, children, className }) => {
  if (TITLE_TYPES.includes(Type)) {
    return <Type className={classNames('title', className)}>{children}</Type>;
  }
  return <h3 className={classNames('title', className)}>{children}</h3>;
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  Type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5']),
};
Title.defaultProps = {
  children: null,
  className: '',
  Type: 'h3',
};

export default Title;
