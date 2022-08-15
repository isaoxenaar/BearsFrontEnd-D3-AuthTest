import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const AuthUser = () => {
    const [name, setName] = useState<string>("isa")
    
    useEffect(() => {
        (
            async () => {
                const request = await fetch("https://localhost:7005/api/Auth", 
                    {
                        method: 'GET',
                        headers: {'Content-Type': 'application/json', },
                        credentials: 'include',
                    }
                )
                const response = await request.json();
                if(response.name){
                    setName(response.name);
                }
            }   
            )()
    }, [])

    if(!name) {
        return <section></section>
    }
    return ( <section className="AuthBar--link">
                <Link to="/observer" state={name}>observer</Link>
            </section>
    )
}

export default AuthUser;