/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import ResumePage from 'containers/ResumePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AnimationPage from 'containers/AnimationPage/Loadable';
import Header from 'components/Header';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 50px;
  flex-direction: column;
`;

export default function App() {
  function generateRandomFavicon() {
    const canvas = document.createElement('canvas');
    canvas.height = 64;
    canvas.width = 64;

    const ctx = canvas.getContext('2d');
    ctx.font = '64px serif';

    // Random choice
    // :boom::rocket::mermaid::woman-cartwheeling::woman-swimming::seedling::sun_with_face::zap::sparkles:
    const emojis = ['💥', '🚀', '🧜🏼‍♀️', '🏊‍♀️', '🌱', '🌞', '⚡️', '✨'];

    const randomEmoji = Math.floor(Math.random() * emojis.length);
    ctx.fillText(emojis[randomEmoji], 0, 64);

    return canvas.toDataURL();
  }

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - Laura Seach"
        defaultTitle="Laura Seach Resume"
      >
        <meta name="description" content="Resume of Laura Seach" />
        <link rel="icon" href={generateRandomFavicon()} />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={ResumePage} />
        <Route path="/animations" component={AnimationPage} />
        <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </AppWrapper>
  );
}
