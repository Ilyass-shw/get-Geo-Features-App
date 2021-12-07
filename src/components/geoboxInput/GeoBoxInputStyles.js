import styled from "styled-components";

export const InputField = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// ============= ============= ============= ============= =============

export const Input = styled.input`
  border-radius: 2px;
  border: 1px solid ${({ Error }) => (Error ? "red" : "#d9d9d9")};
  font-size: 0.9rem;
  width: 170px;
  height: 20px;
  padding: 7px;
  &:focus-visible {
    border-color: red;
  }
`;

// ============= ============= ============= ============= =============

export const Label = styled.label`
  width: 58px;
`;

// ============= ============= ============= ============= =============

export const FormError = styled.p`
  color: red;
  margin: 10px 0 10px 1rem;
`;
