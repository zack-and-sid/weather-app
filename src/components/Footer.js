import styled from 'styled-components';

const StyledFooter = styled('div')`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 1em;
  font-size: 1.8rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>&copy; {new Date().getFullYear()} Zach and Sid</StyledFooter>
  );
};

export default Footer;
