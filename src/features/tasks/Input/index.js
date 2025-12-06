import styled from "styled-components";

export default styled.input`
  flex-basis: 170px;
  max-width: 1000px;
  flex-grow: 1;
  height: 40px;

  @media (max-width: 797px) {
    margin-bottom: 10px;
    width: 100%;
    flex-basis: 40px;
  }
`;
