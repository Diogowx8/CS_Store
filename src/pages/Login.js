import React, {useState, useLayoutEffect} from 'react';
import {Link} from 'react-router-dom';
import {
    Button,
    TextField,
    Checkbox,
} from '@material-ui/core';

import Firebase from '../services/FirebaseConnect'
import { useHistory } from "react-router-dom"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [lembre, setLembre] = useState(false)
    let history = useHistory()

    useLayoutEffect(() => {
        let emailStorage = localStorage.getItem("email")
        let passwordStorage = localStorage.getItem("password")
        if (emailStorage && passwordStorage){
            setEmail(emailStorage)
            setPassword(passwordStorage)
            setLembre(true)
        }
    }, [])

    const login = () => {

        if (lembre === false) {
            localStorage.removeItem("email")
            localStorage.removeItem("password")
        }

        Firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((retorno) => {
                sessionStorage.setItem("uuid", retorno.user.uid)
                if (lembre === true) {
                    localStorage.setItem("email", email)
                    localStorage.setItem("password", password)
                }
                setMensagem("")
                history.push("/menu")
            })
            .catch((erro) => {
                console.log(erro)
                setMensagem("Usuário ou senha inválidos!")
            })
    }

    return(

        <>
		<header id="header">
			<div className="inner">
				<nav id="nav">
					<Link to = "/"> Login </Link>
                    <Link to = "/register"> Register </Link>
				</nav>
				<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
			</div>
		</header>
			<section id="banner">
                <h1> </h1>
			</section>
			<section id="two" className="wrapper style1 special">				
                <div className="inner">
					<header>
						<h2>Login</h2>
					</header>
					<h3>
                        <TextField 
                            label="E-mail" 
                            variant="outlined" 
                            type="email" 
                            value={email} 
                            onChange={(e)=> setEmail(e.target.value)} 
                            style={{width:"100%"}} 
                        />
					</h3>
					<h3>
                        <TextField 
                            label="Senha" 
                            variant="outlined" 
                            type="password"
                            value={password} 
                            onChange={(e)=> setPassword(e.target.value)} 
                            style={{width:"100%"}} 
                        />
					</h3>
                    <h3>
                        <Checkbox
                            checked={lembre}
                            onClick={() => setLembre(!lembre)}
                            color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                        />Lembre-me
                    </h3>
					<h3>
                        <Button onClick={login} variant="contained" color="primary" >
                            Entrar
                        </Button>
                    </h3>
                    {mensagem}
				</div>
			</section>
	    </>
    )
}