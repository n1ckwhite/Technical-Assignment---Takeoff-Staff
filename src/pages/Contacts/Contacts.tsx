import { FC, useEffect, useState } from "react";
import { Navigate } from "react-router";
import { Contact } from "../../Components/Contact/Contact";
import { Modal } from "../../Components/Modal/Modal";
import { ModalContact } from "../../Components/ModalContact/ModalContact";
import { ModalEdit } from "../../Components/ModalEdit/ModalEdit";
import { DELETE_CONTACT, getContacts } from "../../services/action";
import { IItem } from "../../services/reduce";
import { IState, useAppDispatch, useAppSelector } from "../../services/types";
import "./Contacts.css";



export const Contacts: FC<{}> = (): JSX.Element => {
  const contacts = useAppSelector((store: IState) => store.contacts.contacts);
  const [name, setName] = useState("");
  const [popupUser, setPopupUser] = useState(false);
  const [popupEditUser, setPopupEditUser] = useState(false);
  const [currentCard, setCurrentCard] = useState({
    name: "pending",
    email: "pending",
    username: "pending",
    id: "100",
  });
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const popupUserOpen = () => {
    setPopupUser(true);
  };

  const onDelete = (index: string) => {
    dispatch({ type: DELETE_CONTACT, indx: index });
  };

  const popupUserClose = () => {
    setPopupUser(false);
  };

  const popupEditUserOpen = (item: IItem) => {
    setPopupEditUser(true);
    setCurrentCard(item);
  };

  const popupEditUserClose = () => {
    setPopupEditUser(false);
  };

  const filteredCards = contacts.filter((card: IItem) => {
    return (
      card.name.toLowerCase().includes(name.toLowerCase()) ||
      card.email.toLowerCase().includes(name.toLowerCase())
    );
  });

  if (window.localStorage.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <input
        className="input input__search"
        placeholder="Filter Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button className="button button__add-contact" onClick={popupUserOpen}>
        Add Contact
      </button>
      {contacts.length === 0 ? (
        <p>Empty...</p>
      ) : (
        <ul className="ul">
          {filteredCards.map((i: IItem) => (
            <li key={i.id}>
              <Contact
                contact={i}
                onDelete={() => onDelete(i.id)}
                editPopup={() => popupEditUserOpen(i)}
              />
            </li>
          ))}
        </ul>
      )}
      <Modal isOpen={popupUser} closePopup={popupUserClose}>
        <ModalContact closePopup={popupUserClose} />
      </Modal>
      <Modal isOpen={popupEditUser} closePopup={popupEditUserClose}>
        <ModalEdit card={currentCard} closePopup={popupEditUserClose} />
      </Modal>
    </div>
  );
};
