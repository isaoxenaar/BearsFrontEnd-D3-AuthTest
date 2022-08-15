import React, { SyntheticEvent, useState } from 'react';
import Logout from "./Logout";

const Login = () => {

const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");
const [logout, setLogout] = useState<boolean>(false);

const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const user = {
        Email: email,
        Password: password
    }

    const response = await fetch("https://localhost:7005/api/Auth/login",
        {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify(user)
        }
    );
    if(response) {
     setLogout(true)
    }
}
  return (
    <section className="Form--main">
     <form onSubmit={submit}>
      <div className="Form--el">
      <input type="email" className="Form--input" placeholder="name@example.com"  onChange={e => setEmail(e.target.value)} />
    </div>
    <div className="Form--el">
      <input type="password" className="Form--input" placeholder="password" onChange={e => setPassword(e.target.value)}/>
    </div>
    <button className="AuthBar--button" type="submit">Login</button>
    </form>
</section>
  );
}

export default Login;