class Movies {
    static async uploadMovies(req, res, next) {
        res.json({ gordo: 'SALE ESO ?' });
        try {
        } catch (err) {
            next(err);
        }
    }
}

module.exports = Movies;
