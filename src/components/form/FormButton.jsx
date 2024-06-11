import styled from "styled-components";

const FormButton = ({ buttonText, color, type, onClick }) => {
  return (
    <StyledFormButton type={type} color={color} onClick={onClick}>
      {buttonText}
    </StyledFormButton>
  );
};

const StyledFormButton = styled.button`
  padding: 8px 20px;
  height: 34px;
  margin-top: 10px;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out 0s;
  &:hover {
    background-color: #424242;
  }
`;
export default FormButton;
