import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './index.scss';

const Card = ({ id, image, title, text, className }) => {
  return (
    <div key={id} className={classNames('card', className)}>
      <div className="card_bg-image" style={{ backgroundImage: `url(${image})` }} />
      <div className="card_content">
        {title}
        {text}
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  id: null,
  image: null,
  title: null,
  text: null,
  className: '',
};

export default Card;
