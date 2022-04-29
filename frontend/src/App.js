import React from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import MainView from './view/MainView';

function App() {
    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {
        axios
            .get('/movies')
            .then(({ data, status }) => (status === 200 ? setMovies(data) : console.error('Error at fetch data')));
    }, []);

    return (
        <>
            <MainView movies={movies} setMovies={setMovies} />
        </>
    );
}

export default App;
