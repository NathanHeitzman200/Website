import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const port = 8080
const app = express()

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'pages', 'home.html'));
})

app.get('/styles/global/colors.css', (req, res) => {
    res.sendFile(path.join(dirname, 'styles', 'global', 'colors.css'));
})

app.get('/styles/home.css', (req,res) => {
    res.sendFile(path.join(dirname, 'styles', 'home.css'));
})

app.listen(8080, () => {
    console.log('http://localhost:%s', port)
})