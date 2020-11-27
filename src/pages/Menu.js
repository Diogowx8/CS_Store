import React, { useState } from 'react';

import {
	Button,
	Grid,
	MenuItem,
	MenuList,
	Paper,
} from '@material-ui/core';

import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { useHistory } from "react-router-dom"
import Firebase from '../services/FirebaseConnect'
import Vender from './screen/Vender'
import SkinLista from './screen/SkinLista'

export default function Menu() {

	let history = useHistory()

	const [screen, setScreen] = useState(0)

	const sair = () => {

		sessionStorage.removeItem("uuid")
		Firebase
			.auth()
			.signOut()
			.then(() => {
				history.push("/")
			}).catch(() => {
				history.push("/")
			})

	}

	return (

		<>
			<header id="header">
				<div className="inner">
					<Button
						onClick={sair}
						variant="contained"
						color="primary"
						startIcon={<ExitToAppIcon />}>
						Sair
				</Button>
					<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
				</div>
			</header>
			<section id="banner">
				<h1> </h1>
			</section>
			<section id="two" className="wrapper style1 special">
				<div className="inner">
					<header>
						<h2>Seja Bem-Vindo ao CS Store!</h2>
					</header>
					<p>
						Aqui você pode comprar e vender SKINS de CS:GO (Counter Strike Global Offensive),
						tendo um ótimo desconto na hora de sua compra. Você também poderá anunciar sua SKIN pelo valor de mercado, sem taxa adicional do site. Caso o item
						seja de um valor descomunal, será removido imediatamente, para o fluxo de vendas continuarem!
                    </p>
				</div>
				<div className="inner">
					<Grid container>
						<Grid item sm={12} xs={12}>
							<Grid container spacing={1}>
								<Grid item sm={2} xs={12}>
									<Paper>
										<MenuList>
											<MenuItem onClick={() => setScreen(1)}>Skins</MenuItem>
										</MenuList>
									</Paper>
								</Grid>
								<Grid item sm={2} xs={12}>
									<Paper>
										<MenuList>
											<MenuItem onClick={() => setScreen(2)}>Vender</MenuItem>
										</MenuList>
									</Paper>
								</Grid>
							</Grid>
						</Grid>
						<Grid item sm={12} xs={12}>
							<Paper>
								{screen === 1 &&
									<SkinLista/> 
								}
							</Paper>
							<Paper>
								{screen === 2 &&
									 <Vender/>
								}
							</Paper>
						</Grid>
					</Grid>
				</div>
			</section>
			<section id="one" className="wrapper">
				<div className="inner">
					<div className="flex flex-3">
						<article>
							<header>
								<h3>Diogo Costa Volpato<br /></h3>
								<p>Criador do site CS Store, foi desenvolvido para compor nota G2 da matéria Tópicos Especiais em Programação</p>
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