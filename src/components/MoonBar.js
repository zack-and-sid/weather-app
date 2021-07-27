import styled from 'styled-components';

const StyledMoonBar = styled('div')`
  width: 100%;
  min-width: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
    to right,
    #615c9a 65%,
    #7c78a0 75%,
    transparent 100%
  );
  padding: 10px;
  border-radius: 30px 0 0 30px;
  position: relative;
  left: 5%;
  font-size: var(--fz-sm);
  img {
    position: relative;
    top: 0px;
    left: 3px;
    height: 40px;
    transform: scale(1.6);
    filter: drop-shadow(1px 1px 3px rgba(255, 255, 255, 0.2));
    animation: moon-dance 5s ease-in-out forwards;
  }

  span {
    color: white;
    width: 12ch;
    line-height: 1.2;
    margin-left: 1em;
  }

  animation: slide-left 500ms ease forwards;
`;

const MoonBar = ({ moonPhase }) => {
  return (
    <StyledMoonBar>
      <img
        src={require(`../assets/moons/${moonPhase.fileName}`).default}
        alt={moonPhase.description}
      />
      <span className="">{moonPhase.description}</span>
    </StyledMoonBar>
  );
};

export default MoonBar;
