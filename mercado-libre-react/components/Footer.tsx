import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="copyright">
                <div className="copyright-links">
                    <ul className="interest-links">
                        <li><Link href="/">Trabaja con nosotros</Link></li>
                        <li><Link href="/">Términos y condiciones</Link></li>
                        <li><Link href="/">Cómo cuidamos tu privacidad</Link></li>
                        <li><Link href="/">Accesibilidad</Link></li>
                        <li><Link href="/">Ayuda / PQR</Link></li>
                        <li><Link href="/">www.sic.gov.co</Link></li>
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
    )
}

export default Footer