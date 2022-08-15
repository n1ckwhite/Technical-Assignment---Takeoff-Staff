import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { EDIT_CONTACT } from "../../services/action";
import "./Modal.css";

export const ModalEdit: FC<any> = ({ closePopup, card }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(card.name);
  const [username, setUsername] = useState(card.username);
  const [email, setEmail] = useState(card.email);

  const onSubmit = (e: any) => {
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
      <form onSubmit={onSubmit}>
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
