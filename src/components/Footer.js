import styled from 'styled-components';

const StyledFooter = styled('footer')`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0.5em;
  font-size: var(--fz-xs);
  text-align: center;
  opacity: 0.7;

  @media (min-height: 570px) {
    padding: 1em;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>&copy; {new Date().getFullYear()} Zach and Sid</StyledFooter>
  );
};

export default Footer;
