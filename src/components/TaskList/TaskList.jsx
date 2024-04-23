import PropTypes from "prop-types";
import styles from "../TaskList/TaskList.module.css";

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
        <li className={styles.taskListLi} key={task.id}>
          <p className={styles.taskListParagraph}> {task.task}</p>
          <div>
            {!task.done && (
              <button
                className={styles.taskListButton}
                onClick={() => handleTaskDone(task.id)}
              >
                Done
              </button>
            )}
            <button
              className={styles.taskListButton}
              onClick={() => onDeleteClick(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </>
  );
}
TaskList.propTypes = {
  taskArr: PropTypes.array.isRequired,
  setTaskArr: PropTypes.func.isRequired,
};
