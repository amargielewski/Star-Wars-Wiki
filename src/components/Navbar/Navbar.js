import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNavbarWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f9d71c;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: black;
`;

const StyledMenuLinks = styled.div`
  text-decoration: none;
  color: #000000;
  font-weight: 600;
  margin-left: 40px;
`;

const StyledLinkWrapper = styled.div`
  margin-left: 40px;
`;

const StyledSiteLogo = styled(StyledMenuLinks)`
  font-weight: 600;
  font-size: 40px;
`;

const Navbar = () => {
  return (
    <StyledNavbarWrapper>
      <StyledSiteLogo as={NavLink} to="/">
        Star Wars Wiki
      </StyledSiteLogo>
      <StyledLinkWrapper>
        <StyledMenuLinks as={NavLink} to="/planets">
          Planets
        </StyledMenuLinks>
        <StyledMenuLinks as={NavLink} to="/characters">
          Characters
        </StyledMenuLinks>
        <StyledMenuLinks as={NavLink} to="/films">
          Films
        </StyledMenuLinks>
      </StyledLinkWrapper>
    </StyledNavbarWrapper>
  );
};

export default Navbar;
