import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding-right: 20px;

  ${props =>
    !props.title &&
    css`
      margin-top: -20px;
    `}
`;
const HeadTitle = styled.strong`
  font-size: 16px;
  font-family: 'Archivo Black', serif;

  a {
    color: #000;
    text-decoration: none;
    transition: color 0.3s;

    :hover {
      color: #666;
    }
  }
`;
const Responsibility = styled.strong`
  font-size: 15px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const ExperienceItem = props => (
  <Item>
    <HeadTitle hidden={!props.title}>
      {props.url ? <a href={props.url}>{props.title}</a> : props.title}
    </HeadTitle>
    <Responsibility hidden={!props.responsibility && !props.period}>
      {[props.responsibility, props.period].join(' | ')}
    </Responsibility>
    <Description dangerouslySetInnerHTML={{ __html: props.description }} />
  </Item>
);

ExperienceItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  responsibility: PropTypes.string,
  description: PropTypes.string,
  period: PropTypes.string,
};

export default styled(ExperienceItem)``;
