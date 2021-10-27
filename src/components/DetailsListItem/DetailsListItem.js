import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 70px;
  background-color: #f9d71c;

  border-radius: 10px;
`;

const StyledTitle = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: 700;
`;

const StyledContent = styled.p`
  font-size: 25px;

  font-weight: 500;
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
