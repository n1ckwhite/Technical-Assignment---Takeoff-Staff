import { FC, FormEvent, useState } from "react";
import { EDIT_CONTACT } from "../../services/action";
import { IItem } from "../../services/reduce";
import { useAppDispatch } from "../../services/types";
import "./Modal.css";

interface IProps {
  closePopup: () => void;
  card: IItem;
}

export const ModalEdit: FC<IProps> = ({ closePopup, card }): JSX.Element => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState(card.name);
  const [username, setUsername] = useState(card.username);
  const [email, setEmail] = useState(card.email);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: EDIT_CONTACT,
      card: { name, username, email, id: card.id },
    });
    closePopup();
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={onSubmit} className="df">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input mt-10"
          placeholder="Name"
          required
        />
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          className="input mt-10"
          placeholder="Username"
          required
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="input mt-10"
          placeholder="Email"
          required
        />
        <button className="button mt-10">Edit Contact</button>
      </form>
    </div>
  );
};
