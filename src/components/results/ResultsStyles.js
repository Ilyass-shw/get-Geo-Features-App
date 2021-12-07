import styled from "styled-components";

export const ResultTitle = styled.h3`
  color: ${({ fetchStatus, err }) =>
    (fetchStatus && "grey") ||
    (err && "red") ||
    (!(fetchStatus && err) && "#305edf")};
  margin: 3px 15px;
`;

// ============= ============= ============= ============= =============

export const ErrorMSg = styled.div`
  border: 2px solid red;
  margin: 20px auto;
  padding: 20px;
  color: red;
  width: 90vw;
`;
