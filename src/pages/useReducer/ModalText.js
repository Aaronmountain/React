import React, {useEffect} from 'react'
import "./App.css";

function ModalText({ modalContent, closeModal }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className='modal'>
      <p>{modalContent}</p>
    </div>
  );
};

export default ModalText
