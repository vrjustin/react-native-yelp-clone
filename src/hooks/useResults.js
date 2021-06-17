import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('Hello there!');
        try {
            const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'farmington hills'
            } 
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    };

    // Call searchApi when component is first rendered.
    // This is BAD CODE! - it causes an infinite loop. since we search, change state,
    // render, and then search, change state, render...we create an infinite loop!! BAD!
    // searchApi('falaffel')
    useEffect(() => {
        searchApi('fallafel');
    }, [])

    return [searchApi, results, errorMessage];
};