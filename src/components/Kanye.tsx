import { useState, useEffect } from 'react';

function Kanye() {
    const [quote, setQuote] = useState('');

    function fetchQuote() {
        fetch('https://api.kanye.rest')
            .then((res) => res.json())
            .then((data) => setQuote(data.quote));
    }

    useEffect(() => {
        fetchQuote();
    }, []);

    function getQuote() {
        fetchQuote();
    }

    return (
        <div>
        <h1>Yeezy said {quote}</h1>
        <button onClick={getQuote}>Get new quote</button>
        </div>
    );
}

export default Kanye;