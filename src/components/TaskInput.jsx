import PropTypes from "prop-types";
import styled from "styled-components";
import { useState } from "react";
import { nanoid } from "nanoid";

const InputContainer = styled.div`
  /* display: flex; */
`;
const StyledH1 = styled.h1`
  font-size: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;
const StyledPlusBtn = styled.button`
  padding: 5px 15px;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
  color: #555;
  font-size: 40px;
  position: absolute;
  top: 2rem;
  right: 1rem;
  transition: 0.3s;
  border: 1px solid #aaa;

  &:hover {
    background-color: #0099ffac;
  }
`;
const InputWrapper = styled.div`
  margin: 20px;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;
const StyledP = styled.p`
  font-family: sans-serif;
  margin: 10px 0 5px;
`;

export default function TaskInput({ taskArr, setTaskArr, setIsModalShown }) {
  const [inputValue, setInputValue] = useState("");
  const [inputShown, setInputShown] = useState(false);

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onAddClick = () => {
    if (inputValue.trim() !== "") {
      setTaskArr((prev) => [
        { task: inputValue, id: nanoid(), done: false },
        ...prev,
      ]);
      setInputValue("");
    } else {
      setIsModalShown((prev) => !prev);
    }
  };

  const onInputShown = () => {
    setInputShown((prevVal) => !prevVal);
  };
  return (
    <InputContainer>
      <StyledH1>Do zrobieniaa</StyledH1>
      {taskArr.length > 0 ? (
        <StyledP>
          Liczba zadań: <strong>{taskArr.length}</strong>{" "}
        </StyledP>
      ) : (
        <StyledP> Brak zadań</StyledP>
      )}
      {inputShown ? (
        <InputWrapper>
          <StyledInput type="text" onChange={onInputChange} />
          <StyledButton
            onClick={() => {
              onAddClick();
              onInputShown();
            }}
          >
            Dodaj
          </StyledButton>
        </InputWrapper>
      ) : (
        <div>
          <StyledPlusBtn onClick={onInputShown}>+</StyledPlusBtn>{" "}
        </div>
      )}
    </InputContainer>
  );
}
TaskInput.propTypes = {
  taskArr: PropTypes.array.isRequired,
  setTaskArr: PropTypes.func.isRequired,
};
