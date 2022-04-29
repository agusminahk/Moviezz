import React from 'react';
import axios from 'axios';
import { Box, TextField, Typography, Button, Chip, Stack } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

const Filter = ({ movies, setMovies, setTotalPages }) => {
    const [filterValues, setFilterValues] = React.useState({
        titulo: '',
        director: '',
        año: '',
        actores: '',
        genero: '',
    });

    const handleSubmit = async ({ titulo, director, año, actores, genero }) => {
        const query = `titulo=${titulo}&director=${director}&año=${año}&actores=${actores}&genero=${genero}`;

        const moviesFilter = await axios.get(`/movies?page=0&size=21&${query}`);
        if (moviesFilter.status === 200) {
            setMovies(moviesFilter.data.content);
            setTotalPages(moviesFilter.data.totalPages);
        }
    };

    const handleInputChange = (e) => {
        const name = e.target.name;

        setFilterValues({ ...filterValues, [name]: e.target.value });
        console.log(filterValues);
    };

    return (
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: 'rgba(145, 151, 179, 0.2)' }}
                >
                    <Typography sx={{ width: '100%', textAlign: 'center' }}>Filtros</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: 'rgba(145, 151, 179, 0.2)' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                            <TextField
                                id="outlined-basic"
                                size="small"
                                label="Titulo"
                                value={filterValues.titulo}
                                name="titulo"
                                onChange={handleInputChange}
                                variant="outlined"
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            />
                            <TextField
                                id="outlined-basic"
                                size="small"
                                label="Director"
                                value={filterValues.director}
                                name="director"
                                onChange={handleInputChange}
                                variant="outlined"
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            />
                            <TextField
                                id="outlined-basic"
                                size="small"
                                label="Genero"
                                value={filterValues.genero}
                                name="genero"
                                onChange={handleInputChange}
                                variant="outlined"
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            />
                            <TextField
                                id="outlined-basic"
                                size="small"
                                label="Actores"
                                value={filterValues.actores}
                                name="actores"
                                onChange={handleInputChange}
                                variant="outlined"
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            />
                            <TextField
                                id="outlined-basic"
                                size="small"
                                label="Año"
                                variant="outlined"
                                vale={filterValues.año}
                                name={'año'}
                                onChange={handleInputChange}
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            />
                        </Box>

                        <Button
                            startIcon={<SearchIcon />}
                            variant="contained"
                            color="success"
                            onClick={() => handleSubmit(filterValues)}
                            sx={{ width: '30%', margin: '20px auto 0px auto' }}
                        >
                            Buscar
                        </Button>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default Filter;
