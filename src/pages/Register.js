import React from 'react';
import {Link} from 'react-router-dom';
import {
    Button,
    TextField,
} from '@material-ui/core';

export default function Register() {

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
						<h2>Register</h2>
					</header>
					<h3>
                        <TextField label="E-mail" variant="outlined" type="email" style={{width:"100%"}} />
					</h3>
					<h3>
                        <TextField label="Senha" variant="outlined" type="password" style={{width:"100%"}} />
					</h3>
					<h3>
                        <Button variant="contained" color="primary" >
                            Registrar
                        </Button>
                    </h3>
				</div>
			</section>
	    </>
    )
}