import Link from 'next/link'
import React, { useState } from 'react'
import { offersData } from 'utils/offersData'
import _ from 'lodash'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from 'react-icons/lib';

const Offers = () => {
    const [min, setMin] = useState(1);
    let filterDesktop = _.filter(offersData, (offer) => (offer.id <= min + 4) && (offer.id >= min));
    let filterMobile = _.filter(offersData, (offer) => (offer.id <= min + 2) && (offer.id >= min));
    return (
        <section className="offers-section">
            <div className="offers-title">
                <span>Ofertas</span>
                <Link href="/">Ver todas</Link>
            </div>
            <div className="offers-container">
                <div className="offers-cards-desktop">
                    {filterDesktop.map((offer) => {
                        return (
                            <div className="card" key={`offer_${offer.id}`}>
                                <img src={offer.image} alt={offer.alt} />
                                <div className="card-description">
                                    <div className="card-content">
                                        <div>
                                            <span className="price">$ {offer.price}</span>
                                            <span className="sale">{offer.sale}</span>
                                        </div>
                                        <div className="card-content-compound">
                                            {offer.delivery && <span className="send">Envío gratis</span>}
                                            {offer.svg && <svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1_158)">
                                                    <path d="M3.54828 5.34607H8.67511L6.1112 9.87583H10.3844L3.54828 18.029L5.25657 12.5939H0.984375L3.54828 5.34607ZM14.8546 14.6466H12.9434L14.5766 7.31485H20.0088L19.6419 8.96363H16.12L15.8761 10.107H19.3093L18.9424 11.7558H15.4985L14.8546 14.6466ZM24.0917 14.7792C21.8146 14.7792 20.6927 13.7012 20.6927 12.1627C20.6927 12.0417 20.7258 11.789 20.7483 11.6788L21.7258 7.31485H23.6693L22.7034 11.6349C22.6917 11.6905 22.6702 11.8105 22.6702 11.9431C22.681 12.548 23.1483 13.1305 24.0917 13.1305C25.1141 13.1305 25.6361 12.4924 25.8244 11.6349L26.7912 7.31485H28.7239L27.758 11.668C27.358 13.4485 26.3805 14.7792 24.0917 14.7792ZM33.9629 14.6466H29.0751L30.7073 7.31485H32.6185L31.3629 12.9978H34.3288L33.9629 14.6466ZM40.478 14.6466H35.5902L37.2234 7.31485H39.1346L37.879 12.9978H40.8449L40.478 14.6466Z" fill="#00A650" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_158">
                                                        <rect width="40" height="22" fill="white" transform="translate(0.984375 0.6875)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="offers-cards-mobile">
                    {filterMobile.map((offer) => {
                        return (
                            <div className="card" key={`offer_${offer.id}`}>
                                <img src={offer.image} alt={offer.alt} />
                                <div className="card-description">
                                    <div className="card-content">
                                        <div>
                                            <span className="price">$ {offer.price}</span>
                                            <span className="sale">{offer.sale}</span>
                                        </div>
                                        <div className="card-content-compound">
                                            {offer.delivery && <span className="send">Envío gratis</span>}
                                            {offer.svg && <svg width="41" height="23" viewBox="0 0 41 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_1_158)">
                                                    <path d="M3.54828 5.34607H8.67511L6.1112 9.87583H10.3844L3.54828 18.029L5.25657 12.5939H0.984375L3.54828 5.34607ZM14.8546 14.6466H12.9434L14.5766 7.31485H20.0088L19.6419 8.96363H16.12L15.8761 10.107H19.3093L18.9424 11.7558H15.4985L14.8546 14.6466ZM24.0917 14.7792C21.8146 14.7792 20.6927 13.7012 20.6927 12.1627C20.6927 12.0417 20.7258 11.789 20.7483 11.6788L21.7258 7.31485H23.6693L22.7034 11.6349C22.6917 11.6905 22.6702 11.8105 22.6702 11.9431C22.681 12.548 23.1483 13.1305 24.0917 13.1305C25.1141 13.1305 25.6361 12.4924 25.8244 11.6349L26.7912 7.31485H28.7239L27.758 11.668C27.358 13.4485 26.3805 14.7792 24.0917 14.7792ZM33.9629 14.6466H29.0751L30.7073 7.31485H32.6185L31.3629 12.9978H34.3288L33.9629 14.6466ZM40.478 14.6466H35.5902L37.2234 7.31485H39.1346L37.879 12.9978H40.8449L40.478 14.6466Z" fill="#00A650" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_158">
                                                        <rect width="40" height="22" fill="white" transform="translate(0.984375 0.6875)" />
                                                    </clipPath>
                                                </defs>
                                            </svg>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="back-arrow-desktop">
                    <button type='button' className="back-arrow-button" onClick={() => {
                        if (min === 1) {
                            setMin(6);
                        } else {
                            setMin(min - 1);
                        }
                        filterDesktop = _.filter(offersData, (offer) => (offer.id <= min + 4) && (offer.id >= min));
                    }}>
                        <IconContext.Provider value={{ size: "100%" }}>
                            <IoIosArrowBack />
                        </IconContext.Provider>
                    </button>
                </div>
                <div className='next-arrow-desktop'>
                    <button type='button' className="next-arrow-button" onClick={() => {
                        if (min === 6) {
                            setMin(1);
                        } else {
                            setMin(min + 1);
                        }
                        filterDesktop = _.filter(offersData, (offer) => (offer.id <= min + 4) && (offer.id >= min));
                    }}>
                        <IconContext.Provider value={{ size: "100%" }}>
                            <IoIosArrowForward />
                        </IconContext.Provider>
                    </button>
                </div>
                <div className="back-arrow-mobile">
                    <button type='button' className="back-arrow-button" onClick={() => {
                        if (min === 1) {
                            setMin(8);
                        } else {
                            setMin(min - 1);
                        }
                        filterDesktop = _.filter(offersData, (offer) => (offer.id <= min + 4) && (offer.id >= min));
                    }}>
                        <IconContext.Provider value={{ size: "100%" }}>
                            <IoIosArrowBack />
                        </IconContext.Provider>
                    </button>
                </div>
                <div className='next-arrow-mobile'>
                    <button type='button' className="next-arrow-button" onClick={() => {
                        if (min === 8) {
                            setMin(1);
                        } else {
                            setMin(min + 1);
                        }
                        filterDesktop = _.filter(offersData, (offer) => (offer.id <= min + 4) && (offer.id >= min));
                    }}>
                        <IconContext.Provider value={{ size: "100%" }}>
                            <IoIosArrowForward />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
        </section>
    )
}

export { Offers }