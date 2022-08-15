import { FC, FormEvent, useState } from "react";
import { Navigate } from "react-router";
import "./Login.css";
export const Login: FC<{}> = (): JSX.Element => {
  const [log, setLog] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.localStorage.setItem("name", name);
    window.localStorage.setItem("password", password);
    return setLog(true);
  };

  if (log || window.localStorage.length !== 0) {
    return <Navigate to="/contacts" />;
  }
  return (
    <div className="login-page">
      <h2>Authentication</h2>
      <form className="login-form" onSubmit={onSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="input mt-10"
          placeholder="Name: "
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="input mt-10"
          type="password"
          placeholder="Password:"
        />
        <button className="button mt-10">Log In</button>
      </form>
    </div>
  );
};
