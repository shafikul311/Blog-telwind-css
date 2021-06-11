import React from 'react';
import Ticker from 'react-ticker'


const TickerNews = () => {
    return (
        <div className="p-4 text-2xl border-b-2 border-green-50 p-5">
            <Ticker>
        {({ index }) => (
            <>
                <h1 className="text-red-800 mr-5 ">BRAKING NEWS{index}!</h1>
            </>
        )}
        </Ticker>
        </div>
    );
};

export default TickerNews;