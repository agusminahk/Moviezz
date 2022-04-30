import { useState, useEffect } from 'react';

const useForm = (show, setShow, handleEdit, movie) => {
    const [formValues, setFormValues] = useState({
        id: '',
        titulo: '',
        genero: '',
        año: '',
        director: '',
        actores: '',
    });

    const handleInputChange = (e) => {
        const name = e.target.name;
        setFormValues({ ...formValues, [name]: e.target.value });
    };

    const handleSubmit = () => {
        handleEdit(formValues);
        setTimeout(() => setShow(false), 500);
        setShow(false);
    };

    useEffect(() => {
        setFormValues({
            id: movie.id || '',
            titulo: movie.titulo || '',
            genero: movie.genero || '',
            director: movie.director || '',
            actores: movie.actores || '',
            año: movie.año || '',
        });
    }, [show]);

    return { formValues, setFormValues, handleInputChange, handleSubmit };
};

export default useForm;
