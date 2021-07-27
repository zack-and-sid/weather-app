import { css } from 'styled-components';

export default css`
  @keyframes fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes slide-left {
    0% {
      transform: translateX(30%);
      opacity: 0;
    }

    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fade-in-up {
    0% {
      transform: translateY(5%);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes moon-dance {
    0% {
      transform: scale(1.6) rotate(0deg);
    }
    10% {
      transform: scale(1.6) rotate(360deg);
    }

    25% {
      transform: scale(1.54) rotate(355deg);
    }

    50% {
      transform: scale(1.6) rotate(360deg);
    }

    75% {
      transform: scale(1.54) rotate(355deg);
    }

    100% {
      transform: scale(1.6) rotate(360deg);
    }
  }
`;
