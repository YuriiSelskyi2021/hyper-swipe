import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paragraph, Title } from 'components';
import { getCards } from 'services/index.actions';
import './index.scss';

const Home = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards.cards);
  console.log('cards', cards);

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
        Swipe your way through these cards to give us an impession of who you are as a person. These
        are some things we like and maybe you like them too?
      </Paragraph>
    </div>
  );
};

export default Home;
