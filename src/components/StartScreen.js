import styled from "styled-components";
import { ReactComponent as Seasons } from "../assets/seasons.svg";

const StyledStartScreen = styled("div")`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: var(--height-footer);

  /* This will prevent Seasons from growing too big and pushing StartScreen it downward causing overflow */
  /* This also ensures that children is contained within the flex item(StartScreen)  */
  overflow: hidden;

  .copy {
    margin: 1em auto 2em;
    font-size: var(--fz-lg);
    font-style: italic;
    opacity: 0.8;
  }
  svg {
    /* Fill in all available space */
    width: 100%;
    height: 100%;
  }
`;

const StartScreen = ({ message }) => {
  return (
    <StyledStartScreen>
      <div className="wrapper">
        <div className="copy">
          <p>{message}</p>
        </div>
      </div>
      <Seasons />
    </StyledStartScreen>
  );
};

export default StartScreen;
