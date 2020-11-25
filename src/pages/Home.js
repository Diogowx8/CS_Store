import React from 'react';
import {Link} from 'react-router-dom';

export default function Home() {

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
				<section id="two" class="wrapper style1 special">
				<div class="inner">
					<header>
					<h2>Seja Bem-Vindo!</h2>
					</header>
					<p>
                        Aqui você pode comprar e vender SKINS de CS:GO (Counter Strike Global Offensive), 
                        tendo um ótimo desconto na hora de sua compra. Você também poderá anunciar sua SKIN pelo valor de mercado, sem taxa adicional do site. Caso o item
                        seja de um valor descomunal, será removido imediatamente, para o fluxo de vendas continuarem!
                    </p>
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