import React from 'react';
import { Box, Grid, Typography, IconButton, Chip } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import poster from '../assets/default_poster.jpeg';

const MovieCard = (props) => {
    const { movie, handleEdit, handleDelete } = props;

    const [genero1, genero2] = movie.genres.split('+');

    return (
        <Grid
            item
            xs={2}
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
                    {movie.title}
                </Typography>
                <Box component="img" src={poster} sx={{ height: '250px', margin: '20px auto' }} />

                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {genero1 && (
                        <Chip
                            label={genero1}
                            color="primary"
                            sx={{ margin: '5px', boxShadow: ' 0 10px 60px 0 rgba(145, 151, 179, 0.5)' }}
                        />
                    )}
                    {genero2 && (
                        <Chip
                            label={genero2}
                            color="primary"
                            sx={{ margin: '5px', boxShadow: ' 0 10px 60px 0 rgba(145, 151, 179, 0.5)' }}
                        />
                    )}
                </Box>

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
                        sx={{ backgroundColor: 'rgba(255,173,173, .33)' }}
                    />
                    <IconButton
                        color="primary"
                        size="large"
                        children={<ModeEditIcon />}
                        onClick={() => handleDelete(movie.id)}
                        sx={{ backgroundColor: 'rgba(142,236,245, .33)' }}
                    />
                </Box>
            </Box>
        </Grid>
    );
};

export default MovieCard;
