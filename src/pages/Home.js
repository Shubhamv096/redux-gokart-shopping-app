import React from 'react';
import Products from '../components/Products';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
        <div>
            <h2 className="heading">Welcome to the GO KART Shopping App!</h2>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
        <Footer />
        </>
    );
};

export default Home;