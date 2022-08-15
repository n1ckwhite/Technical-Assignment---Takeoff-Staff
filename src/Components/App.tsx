import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Login } from '../pages/Login/Login';
import { Contacts } from '../pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
