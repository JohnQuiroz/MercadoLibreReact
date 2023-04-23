import Link from 'next/link';
import React from 'react'

const Benefits = () => {
    return (
        <section className="benefits-section">
            <div className="benefits-title">
                <span>Beneficios de Mercado Puntos</span>
                <Link href="/">Ver todos los beneficios</Link>
            </div>
            <div>
                <div className="benefits-description">
                    <Link href="/">
                        <div className="benefits-description-disney">
                            <div className="benefits-description-content">
                                <div className="benefits-description-content-img">
                                    <img src="media/beneficios 1 - logo.png" alt="Disney+ y Star+" />
                                </div>
                                <div className="benefits-description-content-text">
                                    <span className="benefits-description-text1">Sin cargo con el nivel 6</span>
                                    <span className="benefits-description-text2">Disney+ y Star+</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="benefits-description-hbo">
                            <div className="benefits-description-content">
                                <div className="benefits-description-content-img">
                                    <img src="media/beneficios 2 - logo.png" alt="HBO Max" />
                                </div>
                                <div className="benefits-description-content-text">
                                    <span className="benefits-description-text3">7 DÍAS GRATIS</span>
                                    <span className="benefits-description-text1">Hasta 50% OFF</span>
                                    <span className="benefits-description-text2">HBO Max</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="/">
                        <div className="benefits-description-paramount">
                            <div className="benefits-description-content">
                                <div className="benefits-description-content-img">
                                    <img src="media/beneficios 3 - logo.png" alt="Paramount+" />
                                </div>
                                <div className="benefits-description-content-text">
                                    <span className="benefits-description-text3">7 DÍAS GRATIS</span>
                                    <span className="benefits-description-text1">Hasta 50% OFF</span>
                                    <span className="benefits-description-text2">Paramount+</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export { Benefits };