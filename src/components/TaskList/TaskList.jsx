import PropTypes from "prop-types";
import styled from "styled-components";

const StyledItem = styled.li`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  padding: 15px;
  text-decoration: ${({ $done }) => ($done ? "line-through" : "none")};

  button {
    margin-left: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
  }
  p {
    font-family: sans-serif;
  }
`;

export default function TaskList({ taskArr, setTaskArr }) {
  const onDeleteClick = (id) => {
    setTaskArr((prev) => prev.filter((task) => task.id !== id));
  };

  const handleTaskDone = (id) => {
    setTaskArr((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  return (
    <>
      {taskArr.map((task) => (
        <StyledItem $done={task.done ? true : undefined} key={task.id}>
          <p>{task.task}</p>
          <div>
            {!task.done && (
              <button onClick={() => handleTaskDone(task.id)}>Zrobione</button>
            )}
            <button onClick={() => onDeleteClick(task.id)}>Usuń</button>
          </div>
        </StyledItem>
      ))}
    </>
  );
}
TaskList.propTypes = {
  taskArr: PropTypes.array.isRequired,
  setTaskArr: PropTypes.func.isRequired,
};
