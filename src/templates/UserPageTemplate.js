import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  padding-top: 80px;
`;

const UserPageTemplate = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default UserPageTemplate;
