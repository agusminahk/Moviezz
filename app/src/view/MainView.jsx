import React from 'react';
import axios from 'axios';
import { Box, Typography, Divider, Grid } from '@mui/material';
import MovieCard from '../components/MovieCard.jsx';

import Form from '../components/Form.jsx';

const MainView = (props) => {
    const { movies, setMovies } = props;

    const [showForm, setShowForm] = React.useState(false);
    const [toEdit, setToEdit] = React.useState({});

    const handleEdit = async (formValues) => {
        const data = { ...formValues, genres: formValues.genres.split(',').join('+') };
        try {
            await axios.put(`/movies/edit/${formValues.id}`, data);
        } catch (error) {
            console.error(error.message);
        }
        const newData = movies.map((pelicula) => (pelicula.id === formValues.id ? data : pelicula));

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
        </Box>
    );
};

export default MainView;
