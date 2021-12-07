import styled from "styled-components";

export const Form = styled.form`
  width: 95vw;
  margin: 18px auto 18px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin: 18px auto;
  }
`;

// ============= ============= ============= ============= =============

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    width: 100vw;
    justify-content: space-evenly;
    max-width: 600px;
  }
`;

// ============= ============= ============= ============= =============

export const FirstPoint = styled.div``;

// ============= ============= ============= ============= =============

export const SecondPoint = styled.div``;

// ============= ============= ============= ============= =============

export const SubmitBtn = styled.button`
  height: 32px;
  width: 224px;
  ${({ disabled }) => !disabled && "cursor: pointer;"}
  border: none;
  display: inline-block;
  padding: 0.6rem 1.9rem;
  background-color: ${({ disabled }) => (disabled ? "#c1c1c1" : "#3388ff")};
  margin: auto;
  border-radius: 2px;
  font-weight: 600;
  color: white;
`;
