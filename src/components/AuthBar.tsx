import React, { SyntheticEvent, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import "../css/authbar.css";
import Register from "./SignUp";
import Login from "./Login";
import AuthUser from "./AuthUser";
import Logout from "./Logout";

const AuthBar = () => {

    const location = useLocation();

    const [login, setLogin] = useState({display: 'none'});
    const [register, setRegister] = useState({display: 'none'})
    const [auth, setAuth ] = useState<any>(location.state)
    console.log("in authbar" + location.state);
    
    const mouseEnter = (e:SyntheticEvent, action:string) => {
        action == "login" ? setLogin({display: "block"}) : setRegister({display: "block"});
        setAuth(location);
    }

    const mouseLeave = (e:SyntheticEvent, action: string) => {
        action == "login" ? setLogin({display: "none"}) : setRegister({display: "none"});
    }

    useEffect(() => {
    }, [auth])

    return (
    <section className="AuthBar--main">     
        <AuthUser/>   
        {!location.state? <section className="AuthBar--main">
            <div className="AuthBar--form" onMouseEnter={e => { mouseEnter(e, "register");}} onMouseLeave={e => { mouseLeave(e,"register") }}>
                <p className="AuthBar--title">register</p>
                <section className="AuthBar--sumbit" style={register}><Register/></section>
            </div>
            <div className="AuthBar--form" onMouseEnter={(e) => mouseEnter(e, "login")} onMouseLeave={(e) => mouseLeave(e, "login")}> 
                <p className="AuthBar--title">login</p>
                <section className="AuthBar--submit" style={login}><Login/></section>
            </div></section> : <section className="AuthBar--logout"><Logout/></section>}
    </section>
    )
}

export default AuthBar;