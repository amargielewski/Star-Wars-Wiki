import React from "react";

import MainTemplate from "../templates/MainTemplate";

import styled from "styled-components";
import HomeCard from "../components/HomeCard/HomeCard";
import { paths } from "../utils/paths";

const StyledHeader = styled.h2`
  margin-top: 100px;
  background-color: #f9d71c;
  padding: 20px 30px;
  font-size: 40px;
  border-radius: 10px;
`;

const StyledCardContainer = styled.div`
  margin-top: 100px;
  display: flex;
`;

const Home = () => {
  return (
    <MainTemplate>
      <StyledHeader>Welcome to Star Wars Wiki App</StyledHeader>
      <StyledCardContainer>
        <HomeCard path={paths.characters} pathName="Characters" />
        <HomeCard path={paths.films} pathName="Films" />
        <HomeCard path={paths.planets} pathName="Planets" />
      </StyledCardContainer>
    </MainTemplate>
  );
};

export default Home;
