import React from 'react';
import axios from 'axios';
import { Box, Typography, Divider, Grid, Pagination } from '@mui/material';

import MovieCard from '../components/MovieCard.jsx';
import Form from '../components/Form.jsx';
import Filter from '../components/Filter.jsx';

const MainView = (props) => {
    const { movies, setMovies, totalPages, setTotalPages, setPage } = props;

    const [showForm, setShowForm] = React.useState(false);
    const [toEdit, setToEdit] = React.useState({});

    const handleEdit = async (formValues) => {
        try {
            await axios.put(`/movies/edit/${formValues.id}`, formValues);
        } catch (error) {
            console.error(error.message);
        }
        const newData = movies.map((pelicula) => (pelicula.id === formValues.id ? formValues : pelicula));

        return setMovies(newData);
    };

    const handleDelete = async (id) => {
        await axios.delete(`/movies/edit/${id}`);
        return setMovies(movies.filter((movie) => movie !== id));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
                <Typography>Titulo</Typography>
            </Box>
            <Filter movies={movies} setMovies={setMovies} setTotalPages={setTotalPages} />

            <Divider />

            <Grid
                container
                sx={{
                    justifyContent: 'space-around',
                    width: '95vw',
                    margin: '30px auto',
                }}
            >
                {movies.length &&
                    movies.map((pelicula, key) => (
                        <MovieCard
                            key={key}
                            movie={pelicula}
                            handleDelete={handleDelete}
                            toEdit={setToEdit}
                            setShowForm={setShowForm}
                        />
                    ))}
            </Grid>

            <Form show={showForm} setShow={setShowForm} handleEdit={handleEdit} movie={toEdit} />

            <Pagination
                sx={{ height: '70px', alignContent: 'center', margin: 'auto' }}
                count={totalPages}
                showFirstButton
                showLastButton
                onChange={(e, page) => setPage(page - 1)}
                size="large"
                variant="outlined"
                shape="rounded"
                color="primary"
            />
        </Box>
    );
};

export default MainView;
