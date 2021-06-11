import React from 'react';
import Blog from '../Blog/Blog';
import LiveButton from '../LiveButton/LiveButton';
import NavBar from '../NavBar/NavBar';
import Ticker from '../Ticker/TickerNews';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <LiveButton/>
            <Ticker/>
            <Blog/>
        </div>
    );
};

export default Home;