import styled, { css } from "styled-components";

export const TaskSection = styled.section`
  background-color: white;
  padding: 15px;
  margin-top: 10px;
`;

export const TaskSectionHeader = styled.header`
  border-bottom: 2px solid #eee;

  @media (min-width: 797px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Header = styled.h2`
  margin-left: 10px;
`;
