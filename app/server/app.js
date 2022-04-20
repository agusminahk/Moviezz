const express = require('express');
const dotenv = require('dotenv');
const volleyball = require('volleyball');
const cors = require('cors');

const router = require('./routes');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(volleyball);

app.use('/api', router);

app.use((req, res) => {
    res.status(404).send({ error: 'Not found' });
});

// client.then(() => {
app.listen(process.env.PORT || 8080, () => {
    console.log(`App listening on ${process.env.PORT || 8080}`);
});
// });
