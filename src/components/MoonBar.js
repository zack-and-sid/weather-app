import styled from 'styled-components';

const StyledMoonBar = styled('div')`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #615c9a;
  padding: 10px;
  border-radius: 30px 0 0 30px;
  position: relative;
  left: 5%;
  font-size: var(--fz-sm);
  img {
    height: 5vh;
    transform: scale(1.6) translateY(4%);
  }

  span {
    color: white;
    width: min-content;
    line-height: 1.2;
    margin-left: 1em;
  }
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
