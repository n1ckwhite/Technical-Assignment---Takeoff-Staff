import { Dispatch, FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Contact } from "../../Components/Contact/Contact";
import { Modal } from "../../Components/Modal/Modal";
import { ModalContact } from "../../Components/ModalContact/ModalContact";
import { getContacts } from "../../services/action";
import "./Contacts.css";

export const Contacts: FC<any> = (): JSX.Element => {
  const [popupUser,setPopupUser] = useState(false)
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const popupUserOpen = () => {
    setPopupUser(true)
  }
  const popupUserClose = () => {
    setPopupUser(false)
  }
  const contacts = useSelector((store: any) => store.contacts.contacts);
  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <input className="input input__search" placeholder="Filter Name" />
      <button className="button button__add-contact" onClick={popupUserOpen}>Add Contact</button>
      {contacts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <ul className="ul">
          {contacts.map((i: any) => (
            <li key={i.id}>
              <Contact contact={i} />
            </li>
          ))}
        </ul>
      )}
      <Modal isOpen={popupUser} closePopup={popupUserClose}><ModalContact closePopup={popupUserClose}/></Modal>
    </div>
  );
};
