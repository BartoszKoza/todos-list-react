import styled, { css } from "styled-components";

export const List = styled.ul`
  list-style: none;
  gap: 10px;
  padding: 10px;
`;

export const Item = styled.li`
  list-style: none;
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 10px;
  border-bottom: 2px solid #eee;
  text-align: start;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `};
`;

export const Content = styled.span`
  text-align: start;
  padding: 10px;
  ${({ $done }) =>
    $done &&
    css`
      text-decoration: line-through;
    `};
`;

export const Button = styled.button`
  color: white;
  width: 31px;
  height: 31px;
  border: none;
  text-decoration: none;
  transition: 1s;
  cursor: pointer;

  ${({ $toggleDone }) =>
    $toggleDone &&
    css`
      background-color: hsl(120, 92%, 33%);

      &:hover {
        background-color: hsl(120, 92%, 45%);
      }
    `};

  ${({ $remove }) =>
    $remove &&
    css`
      background-color: hsl(0, 100%, 50%);

      &:hover {
        background-color: hsl(0, 100%, 65%);
      }
    `};
`;
