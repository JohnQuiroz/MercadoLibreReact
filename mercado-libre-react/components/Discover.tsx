import Link from 'next/link';
import React from 'react'

const Discover = () => {
    return (
        <section className=" w-[80%] py-[100px]"> {/*discover-section */}
            <div className="text-xs-[26px] text-[#666666]"> {/*discover-title */}
                <span>Descubre</span>
            </div>
            <div className="flex flex-row w-[100%] justify-around gap-x-[15px] mt-[28px]"> {/*discover-description-container*/}
                <Link href="/">
                    <div className=" grid grid-cols-[50%_50%] bg-white h-[250px] rounder-[4px]" > {/*discover-description-content*/}
                        <div className="flex flex-col justify-center mx-[32px] "> {/*discover-description-content-text*/}
                            <span className="text-xs-[12px] mb-[18px] d">RENUEVA TUS ESPACIOS</span> {/*discover-description-content-text-1*/}
                            <span className="text-xs-[12px] text-[#4B4B4B] font-bold ">HOGAR Y MUEBLES</span>
                            <span className="text-xs-[12px] text-[#4B4B4B] font-bold ">HASTA 50% OFF</span>
                            <div className="w-[96px] h-[36px] text-xs-[14px] text-white bg-[#3483FA] rounded-none rounded-sm mt-[28px] flex flex-column justify-center text-bold">{/*discover-description-content-img*/}
                                <button>Ver más</button>
                            </div>
                        </div>
                        <div className="w-[100%] h-[250px] rounded">  {/*discover-description-content-img*/}
                            <img src="media/descubre 1.png" alt="Descubre 1" />
                        </div>
                    </div>
                </Link>
                <Link href="/">
                    <div className="grid grid-cols-[50%_50%] bg-white h-[250px] rounded"> {/*discover-description-content*/}
                        <div className="flex flex-col justify-center mx-[32px] "> {/*discover-description-content-text*/}
                            <span className="text-xs-[12px] mb-[18px] !importan ">SUSCRÍBETE AL NIVEL 6</span>{/*discover-description-content-text-1*/}
                            <span className="text-xs-[12px] text-[#4B4B4B] font-bold">POR SOLO</span> {/*discover-description-content-text span*/}
                            <span className="text-xs-[12px] text-[#4B4B4B] font-bold">$17899 CADA MES</span> {/*discover-description-content-text span{*/}
                            <div className="w-[96px] h-[36px] text-xs-[14px] text-white bg-[#3483FA] rounded-none rounded-sm mt-[28px] flex flex-column justify-center text-bold">  {/*discover-description-content-text button*/}
                                <button>Suscribirme</button>
                            </div>
                        </div>
                        <div className="w-[100%] h-[250px] rounded">  {/*discover-description-content-img*/}
                            <img src="media/descubre 2.png" alt="Descubre 2" width="100%" />
                        </div>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export { Discover };