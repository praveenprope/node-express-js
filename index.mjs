import express from 'express';
import 'dotenv/config';

const app = express();
const port = 4000; 

const youtubeLink = '<a href="https://www.youtube.com" target="_blank">YouTube</a>';

app.get('/', (req, res) => {
    res.send('First Node.js Express app');
});

app.get('/youtube', (req, res) => {
    res.send(`<h1>${youtubeLink}</h1>`);
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});
