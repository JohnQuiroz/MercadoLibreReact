import {Advantages} from '@components/Advantages';
import {Banner} from '@components/Banner';
import { Discover } from '@components/Discover';
import { Benefits } from '@components/Benefits';
import {Offers} from '@components/Offers';
import { Header } from 'components/Header';
import React from 'react';
import { Suscribirse } from '@components/Suscribirse';
import Collections from '@components/Collections';
import Categories from '@components/Categories';
import Information from '@components/Information';
import Footer from '@components/Footer';
import { Stores } from '@components/Stores';

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
                        <Stores />
                    </div>
                    <div className="second-container">
                        <Collections />
                        <Categories />
                        <Information />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export { Layout };