const csv = require('csv-parser');
const fs = require('fs');

const result = [];

class MoviesService {
    static async uploadMovies(list, res, next) {
        fs.createReadStream(list)
            .pipe(csv({}))
            .on('data', (data) => result.push(data))
            .on('end', () => {
                console.log(result);
            });
    }
}
