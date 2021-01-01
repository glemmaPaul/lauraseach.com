/* eslint-disable react/no-array-index-key */
import React from 'react';
import { animated, useTrail } from 'react-spring';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import ExperienceItem from './item';

import { experiences, schools } from './constants';

const List = styled.ul`
  list-style: none;
  margin: 0px;
  padding: 20px 0px 0px 0px;
`;

const ColumnList = styled(List)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px #ccc solid;
  padding-top: 50px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Intro = styled.p`
  font-size: 14px;
`;

export default function ResumePage() {
  const animationConfig = {
    x: 0,
    opacity: 1,
    duration: 1000,
    from: {
      x: -20,
      opacity: 0,
    },
  };
  const renderList = (trail, items) =>
    trail.map(({ x, opacity }, index) => (
      <animated.div style={{ 'margin-left': x, opacity, 'margin-right': -x }}>
        <ExperienceItem key={`experience-${index}`} {...items[index]} />
      </animated.div>
    ));

  return (
    <section>
      <Helmet>
        <title>Resume</title>
      </Helmet>

      <Intro>
        Fiercely critical, visual thinker with a penchant for accuracy, good
        design, and good products. Know how to develop a 30kft view of product
        strategy with an eye for discrete detail, rapid prototyping & execution.
        Like to ask questions and collaborate. Goal is to work on products that
        challenge & evolve human relationships with information, technology,
        resources, and the built environment. Current activities include
        building (real / usable!) decentralized applications, organic farming,
        and swimming laps.
      </Intro>
      <List>
        {renderList(useTrail(experiences.length, animationConfig), experiences)}
      </List>
      <ColumnList>
        {renderList(useTrail(schools.length, animationConfig), schools)}
      </ColumnList>
    </section>
  );
}
