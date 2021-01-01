import React from 'react';
import { useTrail, animated } from 'react-spring';
import styled from 'styled-components';

const LetterWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const NiceLetter = animated(styled.span`
  font-size: 25px;
  padding: 10px;
`);

export default function() {
  const heading = `This is a test on how this works on long pages`;
  const animationLength = heading.length;

  const trail = useTrail(animationLength, {
    opacity: 1,
    y: 0,
    from: {
      opacity: 0,
      y: -20,
      duration: 100,
    },
  });

  return (
    <LetterWrapper>
      {trail.map(({ y, opacity }, index) => (
        <NiceLetter style={{ marginTop: index % 2 ? y : -y, opacity }}>
          {heading[index]}
        </NiceLetter>
      ))}
    </LetterWrapper>
  );
}
