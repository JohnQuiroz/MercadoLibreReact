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
                        <section className="categories-section">
                            <div className="categories-title">
                                <span>Categorías populares</span>
                            </div>
                            <div>
                                <div>
                                    <div className="categories-content">
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_436)">
                                                            <path d="M42.5 20.375L40.731 7.111C40.599 6.117 39.751 5.375 38.749 5.375H10.251C9.249 5.375 8.401 6.117 8.269 7.111L6.5 20.375" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M14.5 37.375V43.375H5.5V37.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M43.5 37.375V43.375H34.5V37.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M46.5 37.375H2.5V26.778C2.5 25.87 2.809 24.988 3.377 24.279L6.5 20.375H42.5L45.623 24.279C46.191 24.989 46.5 25.87 46.5 26.778V37.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M38.5 32.375C40.1569 32.375 41.5 31.0319 41.5 29.375C41.5 27.7181 40.1569 26.375 38.5 26.375C36.8431 26.375 35.5 27.7181 35.5 29.375C35.5 31.0319 36.8431 32.375 38.5 32.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M10.5 32.375C12.1569 32.375 13.5 31.0319 13.5 29.375C13.5 27.7181 12.1569 26.375 10.5 26.375C8.84315 26.375 7.5 27.7181 7.5 29.375C7.5 31.0319 8.84315 32.375 10.5 32.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M21.5 29.375H27.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_436">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Carros, Motos y Otros</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_451)">
                                                            <path d="M9.5 12.375H39.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M9.5 34.375H39.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M35.5 46.375H13.5C11.291 46.375 9.5 44.584 9.5 42.375V6.375C9.5 4.166 11.291 2.375 13.5 2.375H35.5C37.709 2.375 39.5 4.166 39.5 6.375V42.375C39.5 44.584 37.709 46.375 35.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M22.5 7.375H26.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_451">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Celulares y Teléfonos</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_464)">
                                                            <path d="M24.5 42.375V36.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M12.5 44.375C12.5 44.375 17.5 42.375 24.5 42.375C31.5 42.375 36.5 44.375 36.5 44.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M46.5 4.375H2.5V36.375H46.5V4.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M2.5 30.375H46.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_464">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Computación</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_476)">
                                                            <path d="M18.5 12.375C24.4 12.375 28.5 9.475 28.5 2.875" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M30.5 30.375V8.375C30.5 5.075 29.8 2.375 26.5 2.375C23.2 2.375 18.5 7.075 18.5 10.375V30.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M36.5 30.375H12.5V46.375H36.5V30.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_476">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Belleza y Cuidado Personal</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_488)">
                                                            <path d="M32.5 4.375C32.5 8.775 28.9 12.375 24.5 12.375C20.1 12.375 16.5 8.775 16.5 4.375H10.5L2.5 8.375V20.375H10.5V44.375H38.5V20.375H46.5V8.375L38.5 4.375H32.5Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_488">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Ropa y Accesorios</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_497)">
                                                            <path d="M16.5 3.875L24.5 9.875L32.5 3.875" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M2.5 25.6751L10.7 19.8751L7.5 10.4751" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M18.9 45.6749L16 36.075L6 36.275" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M43 36.275L33 36.075L30.1 45.6749" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M41.5 10.4751L38.3 19.8751L46.5 25.6751" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M28.5 30.375H20.5L16.5 22.375L24.5 16.375L32.5 22.375L28.5 30.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 46.375C36.6503 46.375 46.5 36.5253 46.5 24.375C46.5 12.2247 36.6503 2.375 24.5 2.375C12.3497 2.375 2.5 12.2247 2.5 24.375C2.5 36.5253 12.3497 46.375 24.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_497">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Deportes y Fitness</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_513)">
                                                            <path d="M8.5 46.375V42.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M40.5 46.375V42.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M40.5 23.475V6.375C40.5 4.175 38.7 2.375 36.5 2.375H12.5C10.3 2.375 8.5 4.175 8.5 6.375V23.475" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M46.5 42.375V28.375C46.5 25.575 44.3 23.375 41.5 23.375C38.7 23.375 36.5 25.575 36.5 28.375V32.375H12.5V28.375C12.5 25.575 10.3 23.375 7.5 23.375C4.7 23.375 2.5 25.575 2.5 28.375V42.375H46.5Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_513">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Hogar y Muebles</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_525)">
                                                            <path d="M24.5 32.375C18.977 32.375 14.5 27.898 14.5 22.375V12.375C14.5 6.852 18.977 2.375 24.5 2.375C30.023 2.375 34.5 6.852 34.5 12.375V22.375C34.5 27.898 30.023 32.375 24.5 32.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M14.5 46.375H34.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 38.375V46.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M40.5 22.375C40.5 31.212 33.337 38.375 24.5 38.375C15.663 38.375 8.5 31.212 8.5 22.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M14.5 14.375H19.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M14.5 21.375H19.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M29.5 14.375H34.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M29.5 21.375H34.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_525">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Electrónica, Audio y Video</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_542)">
                                                            <path d="M7.52023 23.5386C14.5098 26.7385 19.6637 33.2535 21.1032 41.0356" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M41.4798 23.5386C34.4902 26.7385 29.3363 33.2535 27.8968 41.0356" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M8.58936 18.375C8.58936 18.375 16.563 17.375 24.5003 17.375C32.4375 17.375 40.4108 18.375 40.4108 18.375" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M24.5 46.375C36.6503 46.375 46.5 36.5253 46.5 24.375C46.5 12.2247 36.6503 2.375 24.5 2.375C12.3497 2.375 2.5 12.2247 2.5 24.375C2.5 36.5253 12.3497 46.375 24.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 41.375C33.8888 41.375 41.5 33.7638 41.5 24.375C41.5 14.9862 33.8888 7.375 24.5 7.375C15.1112 7.375 7.5 14.9862 7.5 24.375C7.5 33.7638 15.1112 41.375 24.5 41.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 30.375C26.7091 30.375 28.5 28.5841 28.5 26.375C28.5 24.1659 26.7091 22.375 24.5 22.375C22.2909 22.375 20.5 24.1659 20.5 26.375C20.5 28.5841 22.2909 30.375 24.5 30.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_542">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Accesorios para Vehículos</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_556)">
                                                            <path d="M39 30.375C39.8284 30.375 40.5 29.7034 40.5 28.875C40.5 28.0466 39.8284 27.375 39 27.375C38.1716 27.375 37.5 28.0466 37.5 28.875C37.5 29.7034 38.1716 30.375 39 30.375Z" fill="#3483FA" />
                                                            <path d="M35 34.375C35.8284 34.375 36.5 33.7034 36.5 32.875C36.5 32.0466 35.8284 31.375 35 31.375C34.1716 31.375 33.5 32.0466 33.5 32.875C33.5 33.7034 34.1716 34.375 35 34.375Z" fill="#3483FA" />
                                                            <path d="M36.5 20.375H12.5C6.977 20.375 2.5 24.852 2.5 30.375C2.5 35.898 6.977 40.375 12.5 40.375C16.598 40.375 20.111 37.904 21.656 34.375H27.344C28.888 37.904 32.401 40.375 36.5 40.375C42.023 40.375 46.5 35.898 46.5 30.375C46.5 24.852 42.023 20.375 36.5 20.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M12.5 26.375V34.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M8.5 30.375H16.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 14.375V2.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_556">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Consolas y Videojuegos</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_571)">
                                                            <path d="M46.5 2.375H2.5V46.375H46.5V2.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M39.5 18.375H9.5V39.375H39.5V18.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M30.5 26.375V28.375H18.5V26.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 12.375C25.6046 12.375 26.5 11.4796 26.5 10.375C26.5 9.27043 25.6046 8.375 24.5 8.375C23.3954 8.375 22.5 9.27043 22.5 10.375C22.5 11.4796 23.3954 12.375 24.5 12.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M11.5 12.375C12.6046 12.375 13.5 11.4796 13.5 10.375C13.5 9.27043 12.6046 8.375 11.5 8.375C10.3954 8.375 9.5 9.27043 9.5 10.375C9.5 11.4796 10.3954 12.375 11.5 12.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M37.5 12.375C38.6046 12.375 39.5 11.4796 39.5 10.375C39.5 9.27043 38.6046 8.375 37.5 8.375C36.3954 8.375 35.5 9.27043 35.5 10.375C35.5 11.4796 36.3954 12.375 37.5 12.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_571">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Electrodomésticos</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_585)">
                                                            <path d="M24.5 46.375C35.5457 46.375 44.5 37.4207 44.5 26.375C44.5 15.3293 35.5457 6.375 24.5 6.375C13.4543 6.375 4.5 15.3293 4.5 26.375C4.5 37.4207 13.4543 46.375 24.5 46.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 33.375L27.5 29.375H21.5L24.5 33.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M24.5 33.375L27.5 29.375H21.5L24.5 33.375Z" fill="#3483FA" />
                                                            <path d="M24.5 33.375V37.375" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M20.5 37.375H28.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M17.5 24.375C18.6046 24.375 19.5 23.4796 19.5 22.375C19.5 21.2704 18.6046 20.375 17.5 20.375C16.3954 20.375 15.5 21.2704 15.5 22.375C15.5 23.4796 16.3954 24.375 17.5 24.375Z" fill="#3483FA" />
                                                            <path d="M31.5 24.375C32.6046 24.375 33.5 23.4796 33.5 22.375C33.5 21.2704 32.6046 20.375 31.5 20.375C30.3954 20.375 29.5 21.2704 29.5 22.375C29.5 23.4796 30.3954 24.375 31.5 24.375Z" fill="#3483FA" />
                                                            <path d="M14.442 9.085C14.471 8.846 14.5 8.622 14.5 8.375C14.5 5.061 11.814 2.375 8.5 2.375C5.186 2.375 2.5 5.061 2.5 8.375C2.5 11.689 5.186 14.375 8.5 14.375" stroke="#3483FA" stroke-miterlimit="10" />
                                                            <path d="M34.558 9.085C34.529 8.846 34.5 8.622 34.5 8.375C34.5 5.061 37.186 2.375 40.5 2.375C43.814 2.375 46.5 5.061 46.5 8.375C46.5 11.689 43.814 14.375 40.5 14.375" stroke="#3483FA" stroke-miterlimit="10" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_585">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Juegos y Juguetes</span>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="categories-content-column">
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_603)">
                                                            <path d="M7.5 6.375H12.5" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M5.5 43.375H43.5C45.157 43.375 46.5 42.032 46.5 40.375V14.375C46.5 12.718 45.157 11.375 43.5 11.375H35.5L31.501 5.375H21.5L17.5 11.375H5.5C3.843 11.375 2.5 12.718 2.5 14.375V40.375C2.5 42.032 3.843 43.375 5.5 43.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M26.5 37.375C32.0228 37.375 36.5 32.8978 36.5 27.375C36.5 21.8522 32.0228 17.375 26.5 17.375C20.9772 17.375 16.5 21.8522 16.5 27.375C16.5 32.8978 20.9772 37.375 26.5 37.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M10.5 20.375C11.0523 20.375 11.5 19.9273 11.5 19.375C11.5 18.8227 11.0523 18.375 10.5 18.375C9.94772 18.375 9.5 18.8227 9.5 19.375C9.5 19.9273 9.94772 20.375 10.5 20.375Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                            <path d="M10.5 20.375C11.0523 20.375 11.5 19.9273 11.5 19.375C11.5 18.8227 11.0523 18.375 10.5 18.375C9.94772 18.375 9.5 18.8227 9.5 19.375C9.5 19.9273 9.94772 20.375 10.5 20.375Z" fill="#3483FA" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_603">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Cámaras y Accesorios</span>
                                                </div>
                                            </a>
                                            <a href="#">
                                                <div className="categories-content-cell">
                                                    <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clip-path="url(#clip0_1_616)">
                                                            <path d="M46 9.97509L40.1 15.8751L33 8.77509L38.9 2.87509C37.5 2.47509 36.1 2.27509 34.5 2.37509C28.9 2.87509 24.4 7.87509 24.5 13.4751C24.5 14.5751 24.7 15.6751 25 16.6751L5.80001 33.6751C2.90001 36.1751 2.80001 40.6751 5.50001 43.3751C8.20001 46.0751 12.6 45.9751 15.2 43.0751L32.2 23.8751C33.9 24.3751 35.8 24.5751 37.8 24.1751C41.8 23.3751 45.1 20.3751 46.2 16.4751C46.7 14.1751 46.6 11.9751 46 9.97509Z" stroke="#3483FA" stroke-miterlimit="10" stroke-linecap="square" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_1_616">
                                                                <rect width="48" height="48" fill="white" transform="translate(0.5 0.375)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    <span>Herramientas</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="information-section">
                            <div className="information">
                                <div className="information-description">
                                    <svg width="66" height="46" viewBox="0 0 66 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_627)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.910339 4.06598C0.910339 2.40786 2.28769 1.06348 3.98457 1.06348H61.941C63.6388 1.06348 65.0152 2.40341 65.0152 4.06598V41.2467C65.0152 42.9049 63.6379 44.2493 61.941 44.2493H3.98457C2.28678 44.2493 0.910339 42.9093 0.910339 41.2467V4.06598Z" fill="white" />
                                            <mask id="mask0_1_627" /* style="mask-type:luminance" */ maskUnits="userSpaceOnUse" x="0" y="0" width="66" height="46">
                                                <path d="M65.9255 45.1387H0V0.174316H65.9255V45.1387Z" fill="#484848" />
                                            </mask>
                                            <g mask="url(#mask0_1_627)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.98455 1.95318C2.79154 1.95318 1.82066 2.9011 1.82066 4.06603V41.2468C1.82066 42.412 2.79154 43.3599 3.98455 43.3599H61.941C63.134 43.3599 64.1049 42.412 64.1049 41.2468V4.06603C64.1049 2.9011 63.134 1.95318 61.941 1.95318H3.98455ZM3.98455 45.1387C1.78743 45.1387 -3.05176e-05 43.3928 -3.05176e-05 41.2468V4.06603C-3.05176e-05 1.92027 1.78743 0.174316 3.98455 0.174316H61.941C64.1383 0.174316 65.9256 1.92027 65.9256 4.06603V41.2468C65.9256 43.3928 64.1383 45.1387 61.941 45.1387H3.98455Z" fill="#484848" />
                                            </g>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2895 15.6911C19.8526 15.6911 21.9302 13.6859 21.9302 11.2121C21.9302 8.73838 19.8526 6.73315 17.2895 6.73315C14.7264 6.73315 12.6488 8.73838 12.6488 11.2121C12.6488 13.6859 14.7264 15.6911 17.2895 15.6911Z" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.2895 7.62262C15.2325 7.62262 13.5591 9.23271 13.5591 11.2121C13.5591 13.1914 15.2325 14.8017 17.2895 14.8017C19.3464 14.8017 21.0201 13.1914 21.0201 11.2121C21.0201 9.23271 19.3464 7.62262 17.2895 7.62262ZM17.2895 16.5805C14.2287 16.5805 11.7384 14.1722 11.7384 11.2121C11.7384 8.25189 14.2287 5.84375 17.2895 5.84375C20.3503 5.84375 22.8407 8.25189 22.8407 11.2121C22.8407 14.1722 20.3503 16.5805 17.2895 16.5805Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M48 32.7969C48 31.8045 48.8268 31 49.848 31H58.3194C59.3399 31 60.1672 31.8049 60.1672 32.7969V37.9262C60.1672 38.9186 59.3406 39.7231 58.3194 39.7231H49.848C48.8273 39.7231 48 38.9182 48 37.9262V32.7969Z" fill="#3782F7" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6129 16.2848C13.5176 16.2848 15.8725 14.012 15.8725 11.2085C15.8725 8.40505 13.5176 6.13232 10.6129 6.13232C7.70826 6.13232 5.35342 8.40505 5.35342 11.2085C5.35342 14.012 7.70826 16.2848 10.6129 16.2848Z" fill="#3782F7" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.8424 24.6277H6.66276C6.16002 24.6277 5.75241 24.2295 5.75241 23.7383C5.75241 23.2471 6.16002 22.8489 6.66276 22.8489H14.8424C15.3452 22.8489 15.7528 23.2471 15.7528 23.7383C15.7528 24.2295 15.3452 24.6277 14.8424 24.6277Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5916 34.0388H5.67431C5.36002 34.0388 5.10535 33.79 5.10535 33.4829C5.10535 33.1758 5.36002 32.927 5.67431 32.927H11.5916C11.9059 32.927 12.1605 33.1758 12.1605 33.4829C12.1605 33.79 11.9059 34.0388 11.5916 34.0388Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2115 34.0388H16.0318C15.7175 34.0388 15.4628 33.79 15.4628 33.4829C15.4628 33.1758 15.7175 32.927 16.0318 32.927H24.2115C24.5258 32.927 24.7804 33.1758 24.7804 33.4829C24.7804 33.79 24.5258 34.0388 24.2115 34.0388Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.8535 37.7595H5.67437C5.36008 37.7595 5.10541 37.5107 5.10541 37.2036C5.10541 36.8965 5.36008 36.6477 5.67437 36.6477H20.8535C21.1678 36.6477 21.4224 36.8965 21.4224 37.2036C21.4224 37.5107 21.1678 37.7595 20.8535 37.7595Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.2395 24.6277H21.0598C20.5571 24.6277 20.1494 24.2295 20.1494 23.7383C20.1494 23.2471 20.5571 22.8489 21.0598 22.8489H29.2395C29.7422 22.8489 30.1498 23.2471 30.1498 23.7383C30.1498 24.2295 29.7422 24.6277 29.2395 24.6277Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6365 24.6277H35.4569C34.9541 24.6277 34.5465 24.2295 34.5465 23.7383C34.5465 23.2471 34.9541 22.8489 35.4569 22.8489H43.6365C44.1393 22.8489 44.5469 23.2471 44.5469 23.7383C44.5469 24.2295 44.1393 24.6277 43.6365 24.6277Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M58.2174 24.6277H49.6699C49.1672 24.6277 48.7596 24.2295 48.7596 23.7383C48.7596 23.2471 49.1672 22.8489 49.6699 22.8489H58.2174C58.7201 22.8489 59.1277 23.2471 59.1277 23.7383C59.1277 24.2295 58.7201 24.6277 58.2174 24.6277Z" fill="#484848" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_627">
                                                <rect width="66" height="46" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="information-description-title">Paga con tarjeta o en efectivo</span>
                                    <span className="information-description-text">Con Mercado Pago, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</span>
                                    <span className="information-description-link">Cómo pagar con Mercado Pago</span>
                                </div>
                                <div className="information-description">
                                    <svg width="56" height="49" viewBox="0 0 56 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_660)">
                                            <path d="M53.1568 1H2.8432C1.82523 1 1 1.82523 1 2.8432V8.87832C1 9.89629 1.82523 10.7215 2.8432 10.7215H53.1568C54.1748 10.7215 55 9.89629 55 8.87832V2.8432C55 1.82523 54.1748 1 53.1568 1Z" stroke="#484848" stroke-width="1.3824" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 10.7214H52.0909V47.0484C52.0909 47.7271 51.5408 48.2772 50.8621 48.2772H4.2288C3.55015 48.2772 3 47.7271 3 47.0484V10.7214Z" stroke="#484848" stroke-width="1.3824" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M23 21.5202L24.6366 19.8695L26.2727 21.5202L27.9091 19.8695L29.5454 21.5202L31.1819 19.8695L32.8182 21.5202V10H23V21.5202Z" fill="#4E89E5" />
                                            <path d="M32.8182 0.299805H23V10.7215H32.8182V0.299805Z" fill="#4C8CF1" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8726 43.9475H8.45479C8.20366 43.9475 8 43.7316 8 43.4657V33.4822C8 33.2159 8.20366 33 8.45479 33H26.8726C27.1237 33 27.3272 33.2159 27.3272 33.4822V43.4657C27.3272 43.7316 27.1237 43.9475 26.8726 43.9475Z" fill="white" stroke="#484848" stroke-width="1.2288" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5472 38.5807C12.2688 38.5807 12.0209 38.4534 11.8594 38.2535C11.7389 38.1047 11.6667 37.9158 11.6667 37.7098C11.6667 37.2288 12.0608 36.8391 12.5472 36.8391C13.0335 36.8391 13.4277 37.2288 13.4277 37.7098C13.4277 38.1911 13.0335 38.5807 12.5472 38.5807ZM12.5472 35.4304C11.2745 35.4304 10.2425 36.451 10.2425 37.7098C10.2425 38.1713 10.3874 38.5963 10.6258 38.9554L12.5472 41.5064L14.4743 38.9554C14.7114 38.5969 14.8517 38.1701 14.8517 37.7098C14.8517 36.451 13.8201 35.4304 12.5472 35.4304Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1985 36.6456H23.347C23.6825 36.6456 23.9545 36.3736 23.9545 36.038C23.9545 35.7024 23.6825 35.4304 23.347 35.4304H17.1985C16.8629 35.4304 16.5909 35.7024 16.5909 36.038C16.5909 36.3736 16.8629 36.6456 17.1985 36.6456Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1985 39.076H21.506C21.8416 39.076 22.1136 38.804 22.1136 38.4684C22.1136 38.1329 21.8416 37.8608 21.506 37.8608H17.1985C16.8629 37.8608 16.5909 38.1329 16.5909 38.4684C16.5909 38.804 16.8629 39.076 17.1985 39.076Z" fill="#484848" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1985 41.5065H22.1197C22.4552 41.5065 22.7273 41.2344 22.7273 40.8989C22.7273 40.5633 22.4552 40.2913 22.1197 40.2913H17.1985C16.8629 40.2913 16.5909 40.5633 16.5909 40.8989C16.5909 41.2344 16.8629 41.5065 17.1985 41.5065Z" fill="#484848" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_660">
                                                <rect width="56" height="49" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="information-description-title">Envío gratis desde $ 90.000</span>
                                    <span className="information-description-text">Con solo estar registrado en Mercado Libre, tienes envíos gratis en miles de productos seleccionados.</span>
                                    <span className="information-description-link">Conoce más sobre este beneficio</span>
                                </div>
                                <div className="information-description">
                                    <svg width="52" height="55" viewBox="0 0 52 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_684)">
                                            <path d="M23.3787 33.8789L17.7929 28.2931C17.4024 27.9026 17.4024 27.2694 17.7929 26.8789L19.3787 25.2931C19.7692 24.9026 20.4024 24.9026 20.7929 25.2931L24.0858 28.586L33.3787 19.2931C33.7692 18.9026 34.4024 18.9026 34.7929 19.2931L36.3787 20.8789C36.7692 21.2694 36.7692 21.9026 36.3787 22.2931L24.7929 33.8789C24.4024 34.2695 23.7692 34.2695 23.3787 33.8789Z" fill="#3483FA" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M26.2087 1.4126C26.2087 1.4126 19.2087 11.4126 2.20867 8.4126C2.20867 8.4126 -3.79133 37.7676 26.2087 53.5906C56.2087 37.7676 50.2087 8.4126 50.2087 8.4126C33.2087 11.4126 26.2087 1.4126 26.2087 1.4126Z" stroke="#474747" stroke-width="1.413" stroke-linecap="round" stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_684">
                                                <rect width="51" height="55" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span className="information-description-title">Seguridad, de principio a fin</span>
                                    <span className="information-description-text">¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</span>
                                    <span className="information-description-link">Cómo te protegemos</span>
                                </div>
                            </div>
                        </section>
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