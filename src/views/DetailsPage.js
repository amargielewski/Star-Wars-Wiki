import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PlanetsDetails from "../components/PlanetsDetails/PlanetsDetails";
import FilmsDetails from "../components/FilmsDetails/FilmsDetails";
import CharacterDetails from "../components/CharacterDetails/CharacterDetails";
import LoadingBox from "../components/LoadingBox/LoadingBox";

const StyledWrapper = styled.div`
  width: 700px;
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
`;

const StyledListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailsPage = ({ url }) => {
  const { type, id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url + type + "/" + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id, url, type]);

  if (!data) return <LoadingBox />;

  return (
    <StyledWrapper>
      <StyledListContainer>
        {type === "planets" && <PlanetsDetails {...data} />}
        {type === "films" && <FilmsDetails {...data} />}
        {type === "people" && <CharacterDetails {...data} />}
      </StyledListContainer>
    </StyledWrapper>
  );
};

DetailsPage.propTypes = {
  url: PropTypes.string.isRequired,
};

export default DetailsPage;
