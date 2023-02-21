import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();

    return (
        <div>
            <h3>All the phones you want</h3>
            <h5>I got: {phones.length}</h5>
            {
                phones.map(p => <li><Link to={`/phones/${p.id}`}>{p.phone_name}</Link></li>)
            }
        </div>
    );
};

export default Home;