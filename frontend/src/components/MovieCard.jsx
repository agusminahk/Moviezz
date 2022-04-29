import React from 'react';
import { Box, Grid, Typography, IconButton, Chip, Stack } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import poster from '../assets/default_poster.jpeg';

const MovieCard = (props) => {
    const { movie, toEdit, handleDelete, setShowForm } = props;

    const { id, titulo, genero, año, director, actores } = movie;

    return (
        <Grid
            item
            xs={3}
            sx={{
                height: '520px',
                margin: '10px',
                padding: '10px',
                boxShadow: ' 0 10px 60px 0 rgba(145, 151, 179, 0.5)',
                borderRadius: '20px',
            }}
        >
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'space-evenly',
                }}
            >
                <Typography variant="caption " sx={{ textAlign: 'center', minHeight: '50px', alignContent: 'center' }}>
                    {titulo}
                </Typography>
                <Box component="img" src={poster} sx={{ height: '250px', margin: '20px auto' }} />

                <Stack
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'row',
                        alignContent: 'center',
                        justifyContent: 'space-around',
                    }}
                >
                    {genero.split(', ').map((genre, i) => (
                        <Chip
                            key={i}
                            label={genre}
                            color="primary"
                            sx={{
                                margin: '3px',
                                boxShadow: ' 0 10px 60px 0 rgba(145, 151, 179, 0.5)',
                                width: '30%',
                            }}
                        />
                    ))}
                </Stack>

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                    }}
                >
                    <IconButton
                        color="error"
                        children={<DeleteForeverIcon />}
                        size="large"
                        onClick={() => handleDelete(id)}
                        sx={{ backgroundColor: 'rgba(255,173,173, .33)' }}
                    />
                    <IconButton
                        color="primary"
                        size="large"
                        children={<ModeEditIcon />}
                        onClick={() => {
                            toEdit(movie);
                            setShowForm(true);
                        }}
                        sx={{ backgroundColor: 'rgba(142,236,245, .33)' }}
                    />
                </Box>
            </Box>
        </Grid>
    );
};

export default MovieCard;
