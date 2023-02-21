import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();

    return (
        <div>
            <h3>All the phones you want</h3>
            <h5>I got: {phones.length}</h5>
        </div>
    );
};

export default Home;