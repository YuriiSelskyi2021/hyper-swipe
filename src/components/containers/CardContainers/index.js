import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import TinderCard from 'react-tinder-card';
import { Button, Card, Title, Paragraph } from 'components';
import { swipeCard } from 'services/index.actions';
import './index.scss';

const CardContainers = ({ cards }) => {
  const [allCards, setAllCards] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cards.length) {
      setAllCards(cards);
    }
  }, [cards]);

  const childRefs = useMemo(() => Array(allCards.length).fill(React.createRef()), [allCards]);

  const swipe = (type) => {
    if (allCards.length) {
      childRefs[allCards.length - 1].current.swipe(type);
    }
  };

  return (
    <div className="cards">
      <div className="cards-container">
        {allCards.map((card, index) => (
          <TinderCard
            ref={childRefs[index]}
            className="swipe"
            key={card.title}
            onCardLeftScreen={(dir) => dispatch(swipeCard.request({ card: card.id, type: dir }))}
          >
            <Card
              id={card.id}
              image={card.image}
              title={
                <Title Type="h2" className="card-title">
                  {card.title}
                </Title>
              }
              text={<Paragraph className="card-paragraph">{card.body}</Paragraph>}
            />
          </TinderCard>
        ))}
      </div>
      <div className="cards_navigation">
        <Button className="cards_navigation-button left" onClick={() => swipe('left')}>
          Dislike
        </Button>
        <Button className="cards_navigation-button right" onClick={() => swipe('right')}>
          Like
        </Button>
      </div>
    </div>
  );
};

CardContainers.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape()),
};
CardContainers.defaultProps = {
  cards: [],
};

export default CardContainers;
