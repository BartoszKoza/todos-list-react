import styled from "styled-components";

export const Division = styled.div`
  @media (max-width: 797px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const DivButton = styled.button`
  border: none;
  background: transparent;
  color: teal;
  padding: 0px 10px;
  text-align: right;

  &:hover {
    cursor: pointer;
    color: hsl(180, 100%, 30%);
    transition: 0.3s;
  }

  &:disabled {
    color: hsla(0, 0%, 50%, 0.438);
  }

  @media (max-width: 797px) {
    margin-bottom: 10px;
  }
`;
