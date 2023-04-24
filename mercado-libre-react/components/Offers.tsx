import Link from 'next/link';
import React from 'react';
import { OffersContainer } from '@layouts/OffersContainer';

const Offers = () => {
    return (
        <section className="offers-section">
            <div className="offers-title">
                <span>Ofertas</span>
                <Link href="/">Ver todas</Link>
            </div>
            <OffersContainer increase={2} />
            <OffersContainer increase={4} />
        </section>
    )
}

export { Offers }