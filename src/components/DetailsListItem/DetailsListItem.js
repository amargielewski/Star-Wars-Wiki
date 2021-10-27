import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;

  justify-content: space-between;
`;

const StyledTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 15px;
`;

const StyledContent = styled.p`
  padding-left: 20px;
  font-size: 20px;
  font-weight: 400;
`;

const DetailsListItem = ({ title, value }) => {
  return (
    <StyledWrapper>
      <StyledTitle>{title}:</StyledTitle>
      <StyledContent>{value}</StyledContent>
    </StyledWrapper>
  );
};

DetailsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default DetailsListItem;
