const Navbar = () => {
    return (
        <nav>
            <div className="bar">
                <div className="nav-logo">
                    <a href="index.html"><img src='media/logo.png' alt="logo" /></a>
                </div>
                <div className="nav-search">
                    <form className="search-form">
                        <input type="text" placeholder="Buscar productos, marcas y más..." className="search-input" />
                        <button type="submit" className="search-button"></button>
                    </form>
                </div>
                <div className="nav-residence">
                    <a href="#"><span>Ingresa tu domicilio</span></a>
                </div>
                <div className="nav-categories">
                    <nav>
                        <ul className="nav">
                            <li>
                                <a href="#">Categorías</a>
                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_1_16" fill="white">
                                        <path d="M4.54688 0.757355L8.78952 5L4.54688 9.24265L0.304229 5L4.54688 0.757355Z" />
                                    </mask>
                                    <path d="M4.54688 9.24265L3.48621 10.3033L4.54688 11.364L5.60754 10.3033L4.54688 9.24265ZM7.72886 3.93934L3.48621 8.18199L5.60754 10.3033L9.85018 6.06066L7.72886 3.93934ZM5.60754 8.18199L1.36489 3.93934L-0.756431 6.06066L3.48621 10.3033L5.60754 8.18199Z" fill="black" fill-opacity="0.3" mask="url(#path-1-inside-1_1_16)" />
                                </svg>
                            </li>
                            <li><a href="#">Ofertas</a></li>
                            <li><a href="#">Historial</a></li>
                            <li><a href="#">Supermercado</a></li>
                            <li><a href="#">Moda</a></li>
                            <li><a href="#">Vender</a></li>
                            <li><a href="#">Ayuda / PQR</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="nav-signin">
                    <nav>
                        <ul className="nav">
                            <li><a href="#">Crea tu cuenta</a></li>
                            <li><a href="#">Ingresa</a></li>
                            <li><a href="#">Mis compras</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };