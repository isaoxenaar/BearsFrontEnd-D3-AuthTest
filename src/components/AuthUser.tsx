import React, {useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { observerType } from "../types/observerTypes";

const AuthUser = () => {
    const [user, setUser] = useState<observerType>({id: 0, 
        name: "bruxelles", 
        email: "",
        password: "", 
        color: "", 
        bears: [{id: 0, observerId: 0, longitude: 0, latitude: 0, date: new Date().toISOString()}]})
    
    useEffect(() => {
        (
            async () => {
                const request = await fetch("https://localhost:7005/api/Auth", 
                    {
                        method: 'GET',
                        credentials: 'include',
                        headers: {'Content-Type': 'application/json', },
                    }
                )
                const response = await request.json();
                console.log("authuser reponse" + response.name)
                if(response){
                    setUser(response);
                }
            }   
            )()
    }, [])

    if(!user) {
        return <section></section>
    }
    return ( <section className="AuthBar--link">
                <Link to="/observer" state={user}>observer</Link>
            </section>
    )
}

export default AuthUser;