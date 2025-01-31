import { Button, Dialog, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import React from 'react';

import useForm from '../hooks/useForm';

const Form = ({ show, setShow, handleEdit, movie }) => {
    const { formValues, handleInputChange, handleSubmit } = useForm(show, setShow, handleEdit, movie);

    return (
        <>
            <Dialog
                open={show}
                fullWidth
                onClose={() => {
                    setShow(false);
                }}
                onBackdropClick={() => {
                    setShow(false);
                }}
                onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
            >
                <DialogTitle sx={{ margin: '10px auto' }}>Editar Pelicula</DialogTitle>
                <DialogContent>
                    <Grid container spacing={4} sx={{ padding: '10px' }}>
                        <Grid item xs={12}>
                            <TextField
                                label="Titulo"
                                type="text"
                                fullWidth
                                name="titulo"
                                value={formValues.titulo}
                                InputLabelProps={{ shrink: true }}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Director"
                                type="text"
                                name="director"
                                fullWidth
                                value={formValues.director}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Actores"
                                type="text"
                                name="actores"
                                fullWidth
                                value={formValues.actores}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Genres (separar por comas)"
                                type="text"
                                name="genero"
                                fullWidth
                                value={formValues.genero}
                                onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                InputLabelProps={{ shrink: true }}
                                label="Año"
                                type="text"
                                name="año"
                                fullWidth
                                value={formValues.año}
                                onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            sx={{
                                width: '50%',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                margin: '0px auto',
                            }}
                        >
                            <Button
                                variant="contained"
                                color="error"
                                type="button"
                                onClick={() => {
                                    setShow(false);
                                }}
                                disableElevation
                            >
                                Cancelar
                            </Button>
                            <Button
                                style={{ marginLeft: '15px' }}
                                variant="contained"
                                color="info"
                                type="submit"
                                disableElevation
                                onClick={() => handleSubmit()}
                            >
                                Editar Pelicula
                            </Button>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default Form;
