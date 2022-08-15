import "./Modal.css";
import ReactDOM from "react-dom";
import { FC } from "react";
const modal: HTMLDivElement = document.getElementById(
  "react-modals"
) as HTMLDivElement;
export const Modal: FC<any> = ({ isOpen,closePopup,children }): JSX.Element => {
  return ReactDOM.createPortal(
    <div className={isOpen ? 'modal-overlay' : ''}>
      {isOpen ? (
        <div className="modal">
            {children}
            <button className="modal__times" onClick={closePopup}>&times;</button>
        </div>
      ) : (
        ""
      )}
    </div>,
    modal
  );
};
