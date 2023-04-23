import Link from 'next/link';
import React from 'react'

const Benefits = () => {
  return (
    <section className="w-[80%] pt-[82px]"> {/*benefits-section*/}
    <div className="text-text-benefits"> {/*benefits-title*/}
        <span>Beneficios de Mercado Puntos</span>
        <Link href="/">Ver todos los beneficios</Link>
    </div> 
    <div>
        <div className="flex flex-row w-[100%] gap-x-[12px]"> {/*benefits-description*/}
            <Link href="/">
                <div className="flex h-[250px] w-[100%]  bg-beneficios1 bg-no-repeat bg-bottom bg-cover rounded-md align-bottom items-end "> {/* benefits-description-disney*/}
                    <div  className="grid grid-cols-[25%_75%] p-[16px]">  {/*benefits-description-content*/}
                        <div className="w-[100%]">  {/*benefits-description-content-img*/}
                            <img src="media/beneficios 1 - logo.png" alt="Disney+ y Star+"/>
                        </div>
                        <div className=" flex flex-col justify-center mx-[14px] gap-y-[5px]"> {/*benefits-description-content-text*/}
                            <span className=" text-xs-[22px] text-white ">Sin cargo con el nivel 6</span> {/*benefits-description-text1*/}
                            <span className="text-xs-[17px] text-white">Disney+ y Star+</span>  {/*benefits-description-text2*/}
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/">
                <div className="flex h-[250px] w-[100%]  bg-beneficios2 bg-no-repeat bg-bottom bg-cover rounded-md align-bottom items-end "> {/*"benefits-description-hbo"*/}
                    <div className="grid grid-cols-[25%_75%] p-[16px]">  {/*benefits-description-content*/}
                        <div className="w-[100%]">  {/*benefits-description-content-img*/}
                            <img src="media/beneficios 2 - logo.png" alt="HBO Max" />
                        </div>
                        <div className=" flex flex-col justify-center mx-[14px] gap-y-[5px]"> {/*benefits-description-content-text*/}
                            <span className="text-xs-[11px] text-white">7 DÍAS GRATIS</span> {/*benefits-description-text3*/}
                            <span className=" text-xs-[22px] text-white">Hasta 50% OFF</span>{/*benefits-description-text1*/}
                            <span className="text-xs-[17px] text-white">HBO Max</span>  {/*benefits-description-text2*/}
                        </div>
                    </div>
                </div>
            </Link>
            <Link href="/">
                <div className="flex h-[250px] w-[100%]  bg-beneficios3 bg-no-repeat bg-bottom bg-cover rounded-md align-bottom items-end "> {/*"benefits-description-paramount"*/}
                    <div className="grid grid-cols-[25%_75%] p-[16px]">  {/*benefits-description-content*/}
                        <div className="w-[100%]">  {/*benefits-description-content-img*/}
                            <img src="media/beneficios 3 - logo.png" alt="Paramount+" />
                        </div>
                        <div className=" flex flex-col justify-center mx-[14px] gap-y-[5px]"> {/*benefits-description-content-text*/}
                            <span className="text-xs-[11px] text-white">7 DÍAS GRATIS</span> {/*benefits-description-text3*/}
                            <span className=" text-xs-[22px] text-white">Hasta 50% OFF</span> {/*benefits-description-text1*/}
                            <span className="text-xs-[17px] text-white">Paramount+</span> {/*benefits-description-text2*/}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    </div>
</section>
  );
};

export {Benefits};