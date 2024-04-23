import PropTypes from "prop-types";
import styles from "../TaskInput/TaskInput.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";

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
    <div>
      <h1 className={styles.taskInputMainHeader}>Tasks</h1>
      {taskArr.length > 0 ? (
        <p className={styles.taskInputParagraph}>
          Liczba zadań: <strong>{taskArr.length}</strong>{" "}
        </p>
      ) : (
        <p className={styles.taskInputParagraph}> Brak zadań</p>
      )}
      {inputShown ? (
        <div className={styles.taskInputInputContainer}>
          <input
            className={styles.taskInputMainInput}
            type="text"
            onChange={onInputChange}
          />
          <button
            className={styles.taskInputAddButton}
            onClick={() => {
              onAddClick();
              onInputShown();
            }}
          >
            Dodaj
          </button>
        </div>
      ) : (
        <div>
          <button className={styles.taskInputPlusButton} onClick={onInputShown}>
            +
          </button>
        </div>
      )}
    </div>
  );
}
TaskInput.propTypes = {
  taskArr: PropTypes.array.isRequired,
  setTaskArr: PropTypes.func.isRequired,
};
