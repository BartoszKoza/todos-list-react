import styled, { css } from "styled-components";

export const Structure = styled.form`
  padding-top: 15px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 797px) {
    flex-direction: column;
    align-items: stretch;
  }

`;

export const Input = styled.input`
  flex-basis: 170px;
  max-width: 1000px;
  flex-grow: 1;

  @media (max-width: 797px) {
    margin-bottom: 10px;
    width: 100%;
    height: 10px;
    flex-basis: 40px;
  }
`;

export const AddTaskButton = styled.button`
  background-color: teal;
  color: white;
  border: none;
  padding: 10px;
  transition: 1s;
  margin-left: 7px;

  &:hover {
    background-color: hsl(180, 100%, 30%);
    transform: scale(1.07);
    cursor: pointer;
  }

  @media (max-width: 797px) {
    margin-left: 0;
    width: 100%;
  }
`;
