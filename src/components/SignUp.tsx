import React, { SyntheticEvent, useState} from 'react';

const Register = () => {
const [name, setName ] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [password, setPassword] = useState<string>("");

const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const user = {
        Name: name, 
        Email: email,
        Password: password
    }
    const response = await fetch("https://localhost:7005/api/Auth/register",
        {
            method: 'POST', 
            headers: {'Content-Type': 'application/json', },
            body: JSON.stringify(user)
        }
    );
    console.log(response, JSON.stringify(user))
}
  return (
    <section className="Form--main">
    <form onSubmit={submit}>
      <section className="Form--el">
        <input className="Form--input" placeholder="name" onChange={e => setName(e.target.value)}/>
      </section>
      <section className="Form--el">
        <input type="email" className="Form--input" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
      </section>
      <section className="Form--el">
        <input type="password" className="Form--input" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </section>
      <button className="AuthBar--button" type="submit">Register</button>
    </form>
</section>
  );
}

export default Register;