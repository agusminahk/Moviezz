import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import MainView from './view/MainView';
import AddCsv from './components/AddCsv';

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
            <Routes>
                <Route
                    exact
                    path="/"
                    element={
                        <MainView
                            movies={movies}
                            setMovies={setMovies}
                            setPage={setPage}
                            totalPages={totalPages}
                            setTotalPages={setTotalPages}
                        />
                    }
                />

                <Route path="/csv" element={<AddCsv />} />
            </Routes>
        </>
    );
}

export default App;
