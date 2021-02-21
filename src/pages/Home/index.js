import React from 'react';
import { Paragraph, Title } from 'components';
import './index.scss';

const Home = () => {
  return (
    <div className="home">
      <Title Size="h3" className="top-text">
        Welcome to the
      </Title>
      <Title Size="h1" className="home_title">
        Hyper Swipe
      </Title>
      <Paragraph className="home_paragraph">
        These are som things we like and maybe you like them to? Swipe your way through the stack
        and sort the pile into things you like and dislike.
      </Paragraph>
    </div>
  );
};

export default Home;
