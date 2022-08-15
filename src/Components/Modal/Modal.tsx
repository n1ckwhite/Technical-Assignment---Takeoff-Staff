import "./Modal.css";
import ReactDOM from "react-dom";
import { FC } from "react";
const modal: HTMLDivElement = document.getElementById(
  "react-modals"
) as HTMLDivElement;

interface IProps {
  isOpen: boolean;
  closePopup: () => void;
  children: JSX.Element;
}

export const Modal: FC<IProps> = ({
  isOpen,
  closePopup,
  children,
}): JSX.Element => {
  return ReactDOM.createPortal(
    <div className={isOpen ? "modal-overlay" : ""}>
      {isOpen ? (
        <div className="modal">
          {children}
          <button className="modal__times" onClick={closePopup}>
            &times;
          </button>
        </div>
      ) : (
        ""
      )}
    </div>,
    modal
  );
};
