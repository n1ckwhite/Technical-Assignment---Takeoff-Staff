import { FC } from "react";
import "./Contact.css";

export const Contact: FC<any> = ({ contact, onDelete }): JSX.Element => {
  return (
    <span className="contact-card">
      <p className="contact-card__name">{contact.name}</p>
      <p className="contact-card__username">{contact.username}</p>
      <p className="contact-card__email">Email: {contact.email}</p>
      <span className="buttons">
        <button className="button button__delete" onClick={onDelete}>
          delete
        </button>
        <button className="button button__edit">edit</button>
      </span>
    </span>
  );
};
