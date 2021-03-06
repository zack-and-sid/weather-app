import styled from "styled-components";

const StyledFooter = styled("footer")`
  width: 100%;
  /* height: var(--height-footer); */
  padding: 0.5em;
  background: var(--clr-forecast);
  font-size: var(--fz-xs);
  text-align: center;
  color: rgba(0, 0, 0, 0.7);

  @media (min-height: 570px) {
    padding: 1em;
  }

  a {
    color: inherit;
    &:hover,
    &:focus {
      color: var(--clr-secondary);
      opacity: 1;
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      &copy; {new Date().getFullYear()}{" "}
      <a href="https://www.zachbines.com">Zach</a> and{" "}
      <a href="https://www.sidhlee.com">Sid</a>
    </StyledFooter>
  );
};

export default Footer;
