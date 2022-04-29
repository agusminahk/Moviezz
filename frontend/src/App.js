import React, { useState } from 'react';
import axios from 'axios';
import { Box } from '@mui/material';
import MainView from './view/MainView';

function App() {
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [movies, setMovies] = useState([]);

    React.useEffect(() => {
        axios.get(`/movies?page=${page}&size=21`).then(({ data, status }) => {
            if (status === 200) {
                setMovies(data.content);
                setTotalPages(data.totalPages);
                return;
            } else {
                return console.error('Error at fetch data');
            }
        });
    }, [page]);

    return (
        <>
            <MainView movies={movies} setMovies={setMovies} setPage={setPage} totalPages={totalPages} />
        </>
    );
}

export default App;
