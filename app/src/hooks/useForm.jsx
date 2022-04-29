import { useState, useEffect } from 'react';

const useForm = (show, setShow, handleEdit, movie) => {
    const [formValues, setFormValues] = useState({
        id: '',
        movieId: '',
        title: '',
        genres: '',
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
            movieId: movie.movieId || '',
            title: movie.title || '',
            genres: movie.genres || '',
        });
    }, [show]);

    return { formValues, setFormValues, handleInputChange, handleSubmit };
};

export default useForm;
