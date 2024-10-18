import React from 'react';
import classes from './Modal.module.css'; // Импортируем стили

const Modal = ({ onClose }) => { // Добавляем prop onClose для закрытия
  return (
    <div className={classes.modal}>
      <button onClick={onClose}>Закрыть</button> 
      {/* Модальное содержимое ... */}
    </div>
  );
};

export default Modal;