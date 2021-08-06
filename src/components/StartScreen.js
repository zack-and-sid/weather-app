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

const messages = [
  "Did you see the moon last night?",
  "Life can be so sweet...",
  "Every cloud has a silver lining",
  "Mares’ tails and mackerel scales make tall ships take in their sails",
  "When dew is on the grass, rain will never come to pass",
  "Red sky at night, sailor’s delight",
];

const getRandomMessage = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  console.log(randomIndex);
  return '"' + array[randomIndex] + '"';
};

const StartScreen = () => {
  return (
    <StyledStartScreen>
      <div class="wrapper">
        <div className="copy">
          <p>{getRandomMessage(messages)}</p>
        </div>
      </div>
      <Seasons />
    </StyledStartScreen>
  );
};

export default StartScreen;
