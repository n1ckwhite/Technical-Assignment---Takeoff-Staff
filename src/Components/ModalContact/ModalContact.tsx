import { FC, FormEvent, useState } from "react";
import { ADD_CONTACT } from "../../services/action";
import { useAppDispatch } from "../../services/types";
import "./ModalContact.css";
interface IProps {
  closePopup: () => void;
}

export const ModalContact: FC<IProps> = ({ closePopup }): JSX.Element => {
  const dispatch = useAppDispatch()
  const { v4: uuidv4 } = require("uuid");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const addContact = (e: FormEvent) => {
    e.preventDefault();
    dispatch({
      type: ADD_CONTACT,
      card: { name: name, username: name, email: email, id: uuidv4() },
    });
    closePopup();
  };
  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={addContact} className="df">
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
        <button className="button mt-10">Add Contact</button>
      </form>
    </div>
  );
};
