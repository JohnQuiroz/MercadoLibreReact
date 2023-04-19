import { CartContextProvider, useCartContext } from '@context/cartContext';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { MdMenu, MdMenuOpen } from 'react-icons/md';

const Header = () => {
    const [openNavbar, setOpenNavbar] = useState<boolean>(false);
    return (
            <>
                <header className='header'>
                    <nav className="nav">
                        <div className="nav-container">
                            <div className='nav-first-line'>
                                <div className="logo">
                                    <Link href="/">
                                        <Image className='w-full' src="/media/logo.png" alt="logo" width={100} height={100} />
                                    </Link>
                                </div>
                                <div className="search">
                                    <form className="form-search">
                                        <input type="text" placeholder="Buscar productos, marcas y más..." className="input-search" />
                                        <button type="button" className="button-search"></button>
                                    </form>
                                </div>
                                <div className='navbar-menu'>
                                    <button type='button' onClick={() => setOpenNavbar(!openNavbar)}>
                                        {openNavbar ? <MdMenuOpen /> : <MdMenu />}
                                    </button>
                                </div>
                                <ShoppingCart screen=''/>
                            </div>
                            <Desktop />
                        </div>
                    </nav>
                </header>
                {openNavbar && <Mobile />}
            </>
    );
};

interface ShoppingCartProps {
    screen: string;
}

const ShoppingCart = ({screen}: ShoppingCartProps) => {
    const { counter } = useCartContext();
    console.log(counter);
    return (
        <div className={`shopping${screen}`}>
            <div className='cart'>
                <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1.25C0 0.557292 0.557292 0 1.25 0H3.61979C4.76562 0 5.78125 0.666667 6.25521 1.66667H27.6615C29.0312 1.66667 30.0312 2.96875 29.6719 4.29167L27.5365 12.224C27.0938 13.8594 25.6094 15 23.9167 15H8.89062L9.17188 16.4844C9.28646 17.0729 9.80208 17.5 10.401 17.5H25.4167C26.1094 17.5 26.6667 18.0573 26.6667 18.75C26.6667 19.4427 26.1094 20 25.4167 20H10.401C8.59896 20 7.05208 18.7188 6.71875 16.9531L4.03125 2.83854C3.99479 2.64062 3.82292 2.5 3.61979 2.5H1.25C0.557292 2.5 0 1.94271 0 1.25ZM6.66667 24.1667C6.66667 23.8384 6.73133 23.5133 6.85697 23.21C6.9826 22.9066 7.16675 22.631 7.3989 22.3989C7.63105 22.1668 7.90664 21.9826 8.20996 21.857C8.51327 21.7313 8.83836 21.6667 9.16667 21.6667C9.49497 21.6667 9.82006 21.7313 10.1234 21.857C10.4267 21.9826 10.7023 22.1668 10.9344 22.3989C11.1666 22.631 11.3507 22.9066 11.4764 23.21C11.602 23.5133 11.6667 23.8384 11.6667 24.1667C11.6667 24.495 11.602 24.8201 11.4764 25.1234C11.3507 25.4267 11.1666 25.7023 10.9344 25.9344C10.7023 26.1666 10.4267 26.3507 10.1234 26.4764C9.82006 26.602 9.49497 26.6667 9.16667 26.6667C8.83836 26.6667 8.51327 26.602 8.20996 26.4764C7.90664 26.3507 7.63105 26.1666 7.3989 25.9344C7.16675 25.7023 6.9826 25.4267 6.85697 25.1234C6.73133 24.8201 6.66667 24.495 6.66667 24.1667ZM24.1667 21.6667C24.8297 21.6667 25.4656 21.9301 25.9344 22.3989C26.4033 22.8677 26.6667 23.5036 26.6667 24.1667C26.6667 24.8297 26.4033 25.4656 25.9344 25.9344C25.4656 26.4033 24.8297 26.6667 24.1667 26.6667C23.5036 26.6667 22.8677 26.4033 22.3989 25.9344C21.9301 25.4656 21.6667 24.8297 21.6667 24.1667C21.6667 23.5036 21.9301 22.8677 22.3989 22.3989C22.8677 21.9301 23.5036 21.6667 24.1667 21.6667Z" fill="black" />
                </svg>
            </div>
            <div className='cart-counter'>
                <span className='text-white'>{counter}</span>
            </div>
        </div>
    );
};

const Desktop = () => {
    return (
        <>
            <div className='nav-second-line'>
                <div className="address">
                    <Link href="/" className='text-gray-dark'><span>Ingresa tu domicilio</span></Link>
                </div>
                <div className="grow">
                    <ul className="list-none">
                        <li className='list-inline'>
                            <Link href="/" className='categories-menu'>
                                <span>Categorías</span>
                                <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1_1_16" fill="white">
                                        <path d="M4.54688 0.757355L8.78952 5L4.54688 9.24265L0.304229 5L4.54688 0.757355Z" />
                                    </mask>
                                    <path d="M4.54688 9.24265L3.48621 10.3033L4.54688 11.364L5.60754 10.3033L4.54688 9.24265ZM7.72886 3.93934L3.48621 8.18199L5.60754 10.3033L9.85018 6.06066L7.72886 3.93934ZM5.60754 8.18199L1.36489 3.93934L-0.756431 6.06066L3.48621 10.3033L5.60754 8.18199Z" fill="black" fill-opacity="0.3" mask="url(#path-1-inside-1_1_16)" />
                                </svg>
                            </Link>
                        </li>
                        <li className='list-inline'><Link href="/" className='text-gray-transparent'>Ofertas</Link></li>
                        <li className='list-inline'><Link href="/" className='text-gray-transparent'>Historial</Link></li>
                        <li className='list-inline'><Link href="/" className='text-gray-transparent'>Supermercado</Link></li>
                        <li className='list-inline'><Link href="/" className='text-gray-transparent'>Moda</Link></li>
                        <li className='list-inline'><Link href="/" className='text-gray-transparent'>Vender</Link></li>
                        <li className='list-inline'><Link href="/" className='text-gray-transparent'>Ayuda / PQR</Link></li>
                    </ul>
                </div>
                <div className="grow-0">
                    <ul className="list-none">
                        <li className='list-inline'><Link href="/" className='text-gray-dark'>Crea tu cuenta</Link></li>
                        <li className='list-inline'><Link href="/" className='text-gray-dark'>Ingresa</Link></li>
                        <li className='list-inline'><Link href="/" className='text-gray-dark'>Mis compras</Link></li>
                    </ul>
                </div>
                <ShoppingCart screen='-desktop'/>
            </div>
        </>
    );
}

const Mobile = () => {
    return (
        <>
            <nav id="navigation">
                <div className='navbar-mobile'>
                    <div className="address-mobile">
                        <Link href="/" className='text-gray-dark'><span>Ingresa tu domicilio</span></Link>
                    </div>
                    <div className="options-mobile">
                        <ul className="list-none">
                            <li className='my-1'>
                                <Link href="/" className='categories-menu'>
                                    <span>Categorías</span>
                                    <svg width="9" height="10" viewBox="0 0 9 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="path-1-inside-1_1_16" fill="white">
                                            <path d="M4.54688 0.757355L8.78952 5L4.54688 9.24265L0.304229 5L4.54688 0.757355Z" />
                                        </mask>
                                        <path d="M4.54688 9.24265L3.48621 10.3033L4.54688 11.364L5.60754 10.3033L4.54688 9.24265ZM7.72886 3.93934L3.48621 8.18199L5.60754 10.3033L9.85018 6.06066L7.72886 3.93934ZM5.60754 8.18199L1.36489 3.93934L-0.756431 6.06066L3.48621 10.3033L5.60754 8.18199Z" fill="black" fill-opacity="0.3" mask="url(#path-1-inside-1_1_16)" />
                                    </svg>
                                </Link>
                            </li>
                            <li className='my-1'><Link href="/" className='text-gray-transparent'>Ofertas</Link></li>
                            <li className='my-1'><Link href="/" className='text-gray-transparent'>Historial</Link></li>
                            <li className='my-1'><Link href="/" className='text-gray-transparent'>Supermercado</Link></li>
                            <li className='my-1'><Link href="/" className='text-gray-transparent'>Moda</Link></li>
                            <li className='my-1'><Link href="/" className='text-gray-transparent'>Vender</Link></li>
                            <li className='my-1'><Link href="/" className='text-gray-transparent'>Ayuda / PQR</Link></li>
                        </ul>
                    </div>
                    <div className="account-mobile">
                        <ul className="list-none">
                            <li className='my-1'><Link href="/" className='text-gray-dark'>Crea tu cuenta</Link></li>
                            <li className='my-1'><Link href="/" className='text-gray-dark'>Ingresa</Link></li>
                            <li className='my-1'><Link href="/" className='text-gray-dark'>Mis compras</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export { Header };