import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paragraph, Title, CardContainers } from 'components';
import { getCards } from 'services/index.actions';
import './index.scss';

const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);

  useEffect(() => {
    dispatch(getCards.request());
  }, [dispatch]);

  return (
    <div className="home">
      <Title Size="h3" className="top-text">
        Welcome to the
      </Title>
      <Title Size="h1" className="home_title">
        Hyper Swipe
      </Title>
      <Paragraph className="home_paragraph">
        These are some things we like and maybe you like them too? Swipe your way through the stack
        and sort the pile into things you like and dislike.
      </Paragraph>
      <CardContainers cards={cards} />
    </div>
  );
};

export default Home;
