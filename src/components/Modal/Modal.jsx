import styles from "../Modal/Modal.module.css";

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modalBackground}>
      <div className={styles.modalContent}>
        <p>Add some task.</p>
        <br />
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
