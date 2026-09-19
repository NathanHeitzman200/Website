import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const port = 8080
const app = express()

//find absolute paths
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

//pages
app.get('/', (req, res) => {
    res.sendFile(path.join(dirname, 'pages', 'home.html'));
})

//styles
app.get('/styles/global/colors.css', (req, res) => {
    res.sendFile(path.join(dirname, 'styles', 'global', 'colors.css'));
})
app.get('/styles/home.css', (req,res) => {
    res.sendFile(path.join(dirname, 'styles', 'home.css'));
})
app.get('/styles/rules.css', (req,res) => {
    res.sendFile(path.join(dirname, 'styles', 'global', 'rules.css'));
})

//assets
app.get('/assets/stars.jpg', (req,res) => {
    res.sendFile(path.join(dirname, 'assets', 'stars.jpg'))
})

app.listen(8080, () => {
    console.log('http://localhost:%s', port)
})