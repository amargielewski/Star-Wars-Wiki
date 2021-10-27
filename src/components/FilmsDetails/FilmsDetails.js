import React from "react";
import styled from "styled-components";
import BackButton from "../BackButton/BackButton";
import { paths } from "../../utils/paths";
import DetailsListItem from "../DetailsListItem/DetailsListItem";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
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
      <BackButton to={paths.films} siteName={"Films"} />
      <DetailsListItem title="Title" value={title} />
      <DetailsListItem title="Opening Crawl" value={opening_crawl} />
      <DetailsListItem title="Director" value={director} />
      <DetailsListItem title="Producer" value={producer} />
      <DetailsListItem title="Realease date" value={release_date} />
    </StyledWrapper>
  );
};

export default FilmsDetails;
