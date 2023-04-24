import Link from 'next/link'
import React from 'react'

const Collections = () => {
    return (
        <section className="collections-section">
            <div className="collections-title">
                <span>Colecciones:</span>
                <button type='button'>
                    Supermercado
                    <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_398)">
                            <path d="M13.7149 8.75L7.44338 15.0065L1.17188 8.75" stroke="#3483FA" stroke-width="1.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_398">
                                <rect width="14" height="24" fill="white" transform="translate(0.671875)" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <div className="collections-content">
                <Link href="/" className='collections-content-first'>
                    <div className="collections-content-main">
                        <div>
                            <img src="media/colecciones 1.png" alt="Colección 1" />
                        </div>
                        <div className="collections-content-main-description">
                            <span className="collections-content-main-text1">DESCUBRE</span>
                            <span className="collections-content-main-text2">SUPERMERCADO</span>
                        </div>
                    </div>
                </Link>
                <Link href="/" className='col-start-3 row-start-1'>
                    <img src="media/colecciones 2.png" alt="Colección 2" className='collections-content-img' />
                </Link>
                <Link href="/" className='col-start-4 row-start-1'>
                    <img src="media/colecciones 3.png" alt="Colección 3" className='collections-content-img' />
                </Link>
                <Link href="/" className='col-start-5 row-start-1'>
                    <img src="media/colecciones 4.png" alt="Colección 4" className='collections-content-img' />
                </Link>
                <Link href="/" className='col-start-6 row-start-1'>
                    <img src="media/colecciones 5.png" alt="Colección 5" className='collections-content-img' />
                </Link>
                <Link href="/" className='col-start-3 row-start-2'>
                    <img src="media/colecciones 6.png" alt="Colección 6" className='collections-content-img' />
                </Link>
                <Link href="/" className='col-start-4 row-start-2'>
                    <img src="media/colecciones 7.png" alt="Colección 7" className='collections-content-img' />
                </Link>
                <Link href="/" className='col-start-5 row-start-2'>
                    <img src="media/colecciones 8.png" alt="Colección 8" className='collections-content-img' />
                </Link>
                <Link href="/" className='col-start-6 row-start-2'>
                    <img src="media/colecciones 9.png" alt="Colección 9" className='collections-content-img' />
                </Link>
            </div>
        </section>
    )
}

export default Collections