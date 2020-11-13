import React from "react";
import "./modal.scss";
export function Modal({isOpen, setOpen}) {
  if (isOpen) {
    return (
      <div className="modal">
        <div className="modal-container">эта информация расскажет как пользоваться моей программой
        <button className="exit-modal-button" onClick={() => setOpen(false)}> ×</button>
        </div>
      </div>
    );
  }
  return ''
}
