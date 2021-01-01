import React from 'react';
import styled from 'styled-components';

const BigHeader = styled.h1`
  font-size: 32px;
  text-align: center;
  font-family: 'Archivo Black', sans-serif;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const SubTitle = styled.h2`
  font-size: 16px;
  text-align: center;
  font-family: 'Mate', serif;

  a {
    color: #333;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Header() {
  return (
    <div>
      <BigHeader>Laura Seach</BigHeader>
      <SubTitle>
        <a href="mailto:seach.laura@gmail.com">seach.laura@gmail.com</a> |
        <a href="tel:+15613461561">+1 561-346-1561</a> | Based in Berlin
      </SubTitle>
    </div>
  );
}

export default Header;
