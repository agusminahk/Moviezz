import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Divider, Grid, Pagination, Button } from '@mui/material';

import MovieCard from '../components/MovieCard.jsx';
import Form from '../components/Form.jsx';
import Filter from '../components/Filter.jsx';

const MainView = (props) => {
    const { movies, setMovies, totalPages, setTotalPages, setPage } = props;

    const [showForm, setShowForm] = React.useState(false);
    const [toEdit, setToEdit] = React.useState({});

    const navigate = useNavigate();

    const handleEdit = async (formValues) => {
        try {
            await axios.put(process.env.REACT_APP_REST_BACK + `/movies/edit/${formValues.id}`, formValues);
        } catch (error) {
            return console.error(error.message);
        }
        const newData = movies.map((pelicula) => (pelicula.id === formValues.id ? formValues : pelicula));

        return setMovies(newData);
    };

    const handleDelete = async (id) => {
        await axios.delete(process.env.REACT_APP_REST_BACK + `/movies/delete/${id}`);
        // const data = ;
        return setMovies(movies.filter((movie) => movie.id !== id));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex' }}>
                <Typography variant="h5" sx={{ width: '80%', margin: '10px auto', textAlign: ' center', flexGrow: 1 }}>
                    -MovieZ- by Agustin
                </Typography>
                <Button variant="contained" color="warning" sx={{ margin: '10px' }} onClick={() => navigate('/csv')}>
                    Añadir Peliculas
                </Button>
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
