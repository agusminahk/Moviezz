import React from 'react';
import { Box, TextField, Typography, Button, Chip, Stack } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

const Filter = () => {
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
                                variant="outlined"
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            />
                            <TextField
                                id="outlined-basic"
                                size="small"
                                label="Director"
                                variant="outlined"
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            />
                            <TextField
                                id="outlined-basic"
                                size="small"
                                label="Genero"
                                variant="outlined"
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            />
                            <TextField
                                id="outlined-basic"
                                size="small"
                                label="Actores"
                                variant="outlined"
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            />
                            <TextField
                                id="outlined-basic"
                                size="small"
                                label="Año"
                                variant="outlined"
                                sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
                            />
                        </Box>

                        <Button
                            startIcon={<SearchIcon />}
                            variant="contained"
                            color="success"
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
