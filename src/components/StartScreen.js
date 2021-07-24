import styled from 'styled-components';
import { ReactComponent as Seasons } from '../assets/seasons.svg';

const StyledStartScreen = styled('div')`
  padding: 2rem;
  height: 100%;
  .copy {
    margin: 1em auto;
    position: relative;
    left: 20%;
  }
  svg {
    width: 100%;
    height: 60%;
  }
`;

const StartScreen = () => {
  return (
    <StyledStartScreen>
      <div className="copy">
        <p>Life can be so sweat!</p>
      </div>
      <Seasons />
    </StyledStartScreen>
  );
};

export default StartScreen;
