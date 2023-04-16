import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal }).then(res => {
                if (!res.ok) {
                    throw Error("Could not fetch the data for that resource");
                }
                return res.json();
            }).then(data => {
                setData(data);
                setIsPending(false)
                setError(null);
            }).catch((err) => {
                if (err.name === 'AbortError') {
                    console.log('Fetch aborted');
                } else {
                    setIsPending(false)
                    setError(err.message);
                }
            })
        }, 1000);

        return () => abortCont.abort();

    }, [url]); /*the [] is a dependancie array which ensures that the functions useEffect is fired only once 
    on the initial render. you can use this for functions that are made to fire every time a page is reloaded */

    return { data, isPending, error };
}

export default useFetch;