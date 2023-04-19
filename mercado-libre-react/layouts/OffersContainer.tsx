import { useState } from "react";
import { IconContext } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { offersData } from "utils/offersData";
import _ from "lodash";
import Image from "next/image";
import { CartContextProvider, CartType, useCartContext } from "@context/cartContext";
import { toast } from "react-toastify";

interface OffersContainerProps {
    increase: number;
}

const OffersContainer = ({ increase }: OffersContainerProps) => {
    const [min, setMin] = useState<number>(1);
    let filter;
    let classOffers: string;
    let max: number;

    if (increase === 2) {
        filter = _.filter(offersData, (offer) => (offer.id <= min + 2) && (offer.id >= min));
        classOffers = 'offers-container-mobile';
        max = 8;
    } else {
        filter = _.filter(offersData, (offer) => (offer.id <= min + 4) && (offer.id >= min));
        classOffers = 'offers-container-desktop';
        max = 6;
    }

    return (
            <div className={classOffers}>
                <div className='offers-cards'>
                    {filter.map((offer) => {
                        return (
                            <ButtonCart offer={offer} />
                        )
                    })}
                </div>
                <div className="back-arrow-desktop">
                    <button type='button' className="back-arrow-button" onClick={() => {
                        if (min === 1) {
                            setMin(max);
                        } else {
                            setMin(min - 1);
                        }
                        filter = _.filter(offersData, (offer) => (offer.id <= min + 4) && (offer.id >= min));
                    }}>
                        <IconContext.Provider value={{ size: "100%" }}>
                            <IoIosArrowBack />
                        </IconContext.Provider>
                    </button>
                </div>
                <div className='next-arrow-desktop'>
                    <button type='button' className="next-arrow-button" onClick={() => {
                        if (min === max) {
                            setMin(1);
                        } else {
                            setMin(min + 1);
                        }
                        filter = _.filter(offersData, (offer) => (offer.id <= min + 4) && (offer.id >= min));
                    }}>
                        <IconContext.Provider value={{ size: "100%" }}>
                            <IoIosArrowForward />
                        </IconContext.Provider>
                    </button>
                </div>
            </div>
    )
}

interface ButtonCartProps {
    offer: {
        id: number;
        image: string;
        alt: string;
        price: number;
        sale: string;
        delivery: boolean;
        svg: boolean;
    };
}

const ButtonCart = ({ offer }: ButtonCartProps) => {
    const { cart, setCart, counter, setCounter, totalPrice, setTotalPrice } = useCartContext();

    const addCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let newElement: CartType;
        newElement = {
            id: cart.length + 1,
            image: e.currentTarget.getElementsByTagName("img")[0].src,
            alt: e.currentTarget.getElementsByTagName("img")[0].alt,
            price: Number(e.currentTarget.getElementsByClassName("price-number")[0].textContent),
            sale: e.currentTarget.getElementsByClassName("sale")[0].textContent,
            delivery: e.currentTarget.getElementsByClassName("send")[0] == null ? false : true,
            svg: e.currentTarget.getElementsByClassName("card-content-compound")[0].getElementsByTagName("svg")[0] == null ? false : true
        };
        setCounter(counter + 1);
        setCart((prev) => [...prev, newElement]);
        setTotalPrice(totalPrice + newElement.price);
        toast.success('Producto agregado al carrito');
    }

    return (
        <button type='button' onClick={addCart} key={`offer_${offer.id}`}>
            <div className="card">
                <div className="card-img-container">
                    <Image fill src={offer.image} alt={offer.alt} />
                </div>
                <div className="card-description">
                    <div className="card-content">
                        <div>
                            <span className="price">
                                <span>$</span> <span className="price-number">{offer.price}</span></span>
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
        </button>
    )
}

export { OffersContainer };