import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { ADD_CONTACT } from "../../services/action";

export const ModalContact: FC<any> = ({closePopup}) : JSX.Element => {
    const dispatch = useDispatch()
    const { v4: uuidv4 } = require('uuid');
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const addContact = (e: any) => {
        e.preventDefault()
        dispatch({type: ADD_CONTACT,card: {name: name, username: name, email: email, id: uuidv4()}})
        closePopup()
    }
    return (
        <div>
            <form onSubmit={addContact}>
                <input onChange={(e) => setName(e.target.value)} value={name} className="input" placeholder="Name"/>
                <input onChange={(e) => setUsername(e.target.value)} value={username} className="input" placeholder="Username"/>
                <input onChange={(e) => setEmail(e.target.value)} value={email} className="input" placeholder="Email"/>
                <button className="button">Add Contact</button>
            </form>
        </div>
    )
}