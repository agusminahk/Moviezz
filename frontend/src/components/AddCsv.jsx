import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Typography, Button, Chip, Stack } from '@mui/material';

const AddCsv = () => {
    const navigate = useNavigate();
    const [csvFile, SetCsvFile] = React.useState();
    const formData = new FormData();
    formData.append('file', csvFile);

    const handleSubmit = async () => {
        const url = 'http://localhost:8080/api/movies/upload';
        await axios.post(url, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
        });
    };

    return (
        <Box>
            <Box
                sx={{
                    width: '500px',
                    display: 'flex',
                    height: '80vh',
                    margin: '50px auto',
                    justifyContent: 'space-evenly',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: ' 0 10px 60px 0 rgba(145, 151, 179, 0.8)',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        boxShadow: ' 0 10px 60px 0 rgba(145, 151, 179, 0.4)',
                        width: '50%',
                        borderRadius: '15px',
                        textAlign: 'center',
                        marginTop: '20px',
                    }}
                >
                    Agregar peliculas
                </Typography>
                <Box
                    sx={{
                        boxShadow: ' 0 10px 60px 0 rgba(145, 151, 179, 0.4)',
                        width: '80%',
                        height: '20px',
                        borderRadius: '15px',
                        padding: '20px',
                        textAlign: 'center',
                        alignContent: 'center',
                    }}
                >
                    <form encType="multipart/form-data">
                        <input
                            type="file"
                            accept=".csv"
                            id="file_to_upload"
                            onChange={(e) => SetCsvFile(e.target.files[0])}
                        />
                    </form>
                </Box>

                <Box sx={{ width: '50%', display: 'flex', justifyContent: 'space-around', margin: '0px auto' }}>
                    <Button variant="contained" color="error" onClick={() => navigate('/')}>
                        Cancelar
                    </Button>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={() => {
                            handleSubmit();
                            navigate('/');
                        }}
                    >
                        Agregar
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AddCsv;
