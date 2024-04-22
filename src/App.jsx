import PropTypes from "prop-types";
import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import TaskList from "./components/TaskList/TaskList";
import TaskInput from "./components/TaskInput/TaskInput";
import Modal from "./components/Modal/Modal";

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 5rem auto;
  padding: 30px;
  width: 400px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.7px);
  -webkit-backdrop-filter: blur(2.7px);
  border: 1px solid rgba(255, 255, 255, 0.76);
  position: relative;
`;

const StyledUl = styled.ul`
  margin: 20px;
`;

function App() {
  const [isModalShown, setIsModalShown] = useState(false);
  const [taskArr, setTaskArr] = useState([]);

  const handleClose = () => {
    setIsModalShown((prev) => !prev);
  };

  return (
    <>
      {isModalShown && <Modal onClose={handleClose} />}
      <StyledContainer>
        <TaskInput
          taskArr={taskArr}
          setTaskArr={setTaskArr}
          setIsModalShown={setIsModalShown}
        />
        <StyledUl>
          <TaskList taskArr={taskArr} setTaskArr={setTaskArr} />
        </StyledUl>
      </StyledContainer>
    </>
  );
}

export default App;

App.propTypes = {
  taskArr: PropTypes.array,
  setTaskArr: PropTypes.func,
};
