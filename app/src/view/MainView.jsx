import React from 'react';
import axios from 'axios';
import { Box, Typography, Divider, Grid } from '@mui/material';
import MovieCard from '../components/MovieCard.jsx';

const MainView = (props) => {
    const { movies, setMovies } = props;

    const handleEdit = (id, newData) => {
        axios.put(`/movies/edit/${id}`, newData);
    };

    const handleDelete = (id) => {
        axios.delete(`/movies/edit/${id}`);
        setMovies(movies.filter((movie) => movie !== id));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
                <Typography>Titulo</Typography>
                <Box>Filtro</Box>
            </Box>

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
                    movies.map((pelicula) => (
                        <MovieCard movie={pelicula} handleEdit={handleEdit} handleDelete={handleDelete} />
                    ))}
            </Grid>
        </Box>
    );
};

export default MainView;
