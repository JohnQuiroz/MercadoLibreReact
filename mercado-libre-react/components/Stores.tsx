import Link from 'next/link';
import React from 'react'

const Stores = () => {
    return (
        <section className="stores-section">
            <div>
                <div className="stores-title">
                    <span>Las mejores tiendas te esperan</span>
                    <Link href="/">Ver tiendas</Link>
                </div>
                <div>
                    <div className="stores-container">
                        <div className="stores-description-1">
                            <div className="stores-description-logo">
                                <img src="media/mejores 1 - logo.png" alt="Tienda 1" />
                            </div>
                            <div className="stores-description-name">
                                <span>Lego</span>
                            </div>
                            <div className="stores-description-items">
                                <Link href="/"><img src="media/mejores 1 - 1.png" /></Link>
                                <Link href="/"><img src="media/mejores 1 - 2.png" /></Link>
                                <Link href="/"><img src="media/mejores 1 - 3.png" /></Link>
                            </div>
                            <span className="stores-description-more">Ver tienda</span>
                        </div>
                        <div className="stores-description-2">
                            <div className="stores-description-logo">
                                <img src="media/mejores 2 - logo.png" alt="Tienda 2" />
                            </div>
                            <div className="stores-description-name">
                                <span>Xiaomi</span>
                            </div>
                            <div className="stores-description-items">
                                <Link href="/"><img src="media/mejores 2 - 1.png" /></Link>
                                <Link href="/"><img src="media/mejores 2 - 2.png" /></Link>
                                <Link href="/"><img src="media/mejores 2 - 3.png" /></Link>
                            </div>
                            <span className="stores-description-more">Ver tienda</span>
                        </div>
                        <div className="stores-description-3">
                            <div className="stores-description-logo">
                                <img src="media/mejores 3 - logo.png" alt="Tienda 3" />
                            </div>
                            <div className="stores-description-name">
                                <span>Oster</span>
                            </div>
                            <div className="stores-description-items">
                                <Link href="/"><img src="media/mejores 3 - 1.png" /></Link>
                                <Link href="/"><img src="media/mejores 3 - 2.png" /></Link>
                                <Link href="/"><img src="media/mejores 3 - 3.png" /></Link>
                            </div>
                            <span className="stores-description-more">Ver tienda</span>
                        </div>
                        <div className="stores-description-4">
                            <div className="stores-description-logo">
                                <img src="media/mejores 4 - logo.png" alt="Tienda 4" />
                            </div>
                            <div className="stores-description-name">
                                <span>Nikon</span>
                            </div>
                            <div className="stores-description-items">
                                <Link href="/"><img src="media/mejores 4 - 1.png" /></Link>
                                <Link href="/"><img src="media/mejores 4 - 2.png" /></Link>
                                <Link href="/"><img src="media/mejores 4 - 3.png" /></Link>
                            </div>
                            <span className="stores-description-more">Ver tienda</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Stores };
