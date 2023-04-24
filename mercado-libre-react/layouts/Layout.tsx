import {Advantages} from '@components/Advantages';
import {Banner} from '@components/Banner';
import { Discover } from '@components/Discover';
import { Benefits } from '@components/Benefits';
import {Offers} from '@components/Offers';
import { Stores } from '@components/Stores';
import { Header } from 'components/Header';
import React from 'react';
import { Suscribirse } from '@components/Suscribirse';
import Collections from '@components/Collections';
import Categories from '@components/Categories';
import Information from '@components/Information';

const Layout = () => {
    return (
        <div>
            <Header />
            <main className='bg-white-darker'>
                <div className="w-screen">
                    <Banner />
                    <div className="first-container">
                        <Advantages />
                        <Offers />
                        <Suscribirse />
                        <Benefits />
                        <Discover />
                        <Stores/>
                    </div>
                    <div className="second-container">
                        <Collections />
                        <Categories />
                        <Information />
                    </div>
                </div>
            </main>
            <footer>
                <div className="copyright">
                    <div className="copyright-links">
                        <ul className="interest-links">
                            <li><a href="#">Trabaja con nosotros</a></li>
                            <li><a href="#">Términos y condiciones</a></li>
                            <li><a href="#">Cómo cuidamos tu privacidad</a></li>
                            <li><a href="#">Accesibilidad</a></li>
                            <li><a href="#">Ayuda / PQR</a></li>
                            <li><a href="#">www.sic.gov.co</a></li>
                        </ul>
                        <span>Copyright © 1999-2023 MercadoLibre Colombia LTDA.</span>
                    </div>
                    <div className="copyright-address">
                        <span>Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia</span>
                    </div>
                </div>
                <div className="endorse">
                    <div>
                        <img src="media/logo industria y comercio.png" alt="Industria y Comercio" />
                    </div>
                    <div>
                        <img src="media/logo pare compare.png" alt="Pare y Compare" />
                    </div>
                </div>
            </footer>
        </div>
    );
};

export { Layout };