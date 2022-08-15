import { FC } from "react";
import { IItem } from "../../services/reduce";
import "./Contact.css";

interface IProps {
  contact: IItem;
  onDelete: () => void;
  editPopup: () => void;
}

export const Contact: FC<IProps> = ({
  contact,
  onDelete,
  editPopup,
}): JSX.Element => {
  return (
    <span className="contact-card">
      <p className="contact-card__name">{contact.name}</p>
      <p className="contact-card__username">{contact.username}</p>
      <p className="contact-card__email">Email: {contact.email}</p>
      <span className="buttons">
        <button className="button button__delete" onClick={onDelete}>
          delete
        </button>
        <button className="button button__edit" onClick={editPopup}>
          edit
        </button>
      </span>
    </span>
  );
};
