import React, { useEffect } from 'react';

const Logout = () => {

  const logout = async () => {
    const response = await fetch("https://localhost:7005/api/Auth/logout",
        {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        }
    );
    console.log(response.json())
  }

    useEffect(() => {
   
    }, [])

  return (
    <section className="Logout--main">
      <button className="AuthBar--button" onClick={logout}>Logout</button>
    </section>
  );
}

export default Logout;
