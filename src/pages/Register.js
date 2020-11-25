import React from 'react';
import {Link} from 'react-router-dom';
import {
    Button,
    Grid,
    TextField,
} from '@material-ui/core';

export default function Register() {

    return(

        <>
		<header id="header">
			<div className="inner">
				<nav id="nav">
                    <Link to = "/"> Home </Link>
					<Link to = "/login"> Login </Link>
                    <Link to = "/register"> Register </Link>
				</nav>
				<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
			</div>
		</header>
			<section id="banner">
                <h1>
                    <text style={{ fontFamily: 'Stencil' }}>CS Store</text>
                </h1>
			</section>
			<section id="two" className="wrapper style1 special">				
                <div className="inner">
					<header>
						<h2>Register</h2>
					</header>
					<h3>
                        <TextField label="E-mail" variant="outlined" type="email" style={{width:"50%"}} />
					</h3>
					<h3>
                        <TextField label="Senha" variant="outlined" type="password" style={{width:"50%"}} />
					</h3>
					<h3>
                        <Button variant="contained" color="primary" >
                            Registrar
                        </Button>
                    </h3>
				</div>
			</section>

			<section id="one" className="wrapper">
				<div className="inner">
					<div className="flex flex-3">
                        <article>
                            <header>
                                <h3>Diogo Costa Volpato<br /></h3>
                                <p>Criador do site CS Store, desenvolvido para compor nota G2 da matéria Tópicos Especiais em Programação</p>
                            </header>
                        </article>
                        <article>
                            <header>
                                <h3>IMED<br /></h3>
                            </header>
                            <p>Ciência da Computação</p>
                        </article>
                        <article>
                            <header>
                                <h3>Contato<br /></h3>
                            </header>
                            <p>E-mail: diogo.v00@hotmail.com</p>
                            <p>Whatsapp: (55) 54 98446-3893</p>
                        </article>
					</div>
				</div>
			</section>
	    </>
    )
}