import React, { useRef, useEffect } from "react";
import "./modal.scss";
export function Modal({ isOpen, setOpen }) {
  const modal = useRef(null);
  const onClickOutsideHandler = (e) => {
    if ((isOpen && !modal.current.contains(e.target)) || (isOpen && e.target.classList.contains("exit-modal-button"))) {
      setOpen(false);
      window.removeEventListener("click", onClickOutsideHandler);
    }
  };

  useEffect(() => {
    window.addEventListener("click", onClickOutsideHandler);
  }, [setOpen, isOpen, modal]);
  if (isOpen) {
    return (
      <div className="modal">
        <div ref={modal} className="modal-container">
          эта информация расскажет как пользоваться моей программой
        </div>
        <button className="exit-modal-button">×</button>
      </div>
    );
  }
  return "";
}
