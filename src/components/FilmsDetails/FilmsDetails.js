import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 700px;
`;

const FilmsDetails = ({
  title,
  opening_crawl,
  director,
  producer,
  release_date,
}) => {
  return (
    <StyledWrapper>
      <p>{title}</p>
      <p>{opening_crawl}</p>
      <p>{director}</p>
      <p>{producer}</p>
      <p>{release_date}</p>
    </StyledWrapper>
  );
};

export default FilmsDetails;
