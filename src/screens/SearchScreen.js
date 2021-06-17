import React, { useState, useEffect } from 'react';
import { View , Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View style={styles.background} >
            <SearchBar 
                term={term} 
                onTermChange={setTerm} 
                onTermSubmitted={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'
    }
});

export default SearchScreen;