import React from 'react'

const Discover = () => {
  return (
    <section className="discover-section">
                            <div className="discover-title">
                                <span>Descubre</span>
                            </div>
                            <div className="discover-description-container">
                                <a href="#">
                                    <div className="discover-description-content">
                                        <div className="discover-description-content-text">
                                            <span className="discover-description-content-text-1">RENUEVA TUS ESPACIOS</span>
                                            <span>HOGAR Y MUEBLES</span>
                                            <span>HASTA 50% OFF</span>
                                            <div>
                                                <button>Ver más</button>
                                            </div>
                                        </div>
                                        <div className="discover-description-content-img">
                                            <img src="media/descubre 1.png" alt="Descubre 1" />
                                        </div>
                                    </div>
                                </a>
                                <a href="#">
                                    <div className="discover-description-content">
                                        <div className="discover-description-content-text">
                                            <span className="discover-description-content-text-1">SUSCRÍBETE AL NIVEL 6</span>
                                            <span>POR SOLO</span>
                                            <span>$17899 CADA MES</span>
                                            <div>
                                                <button>Suscribirme</button>
                                            </div>
                                        </div>
                                        <div className="discover-description-content-img">
                                            <img src="media/descubre 2.png" alt="Descubre 2" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </section>
  );
};

export {Discover};