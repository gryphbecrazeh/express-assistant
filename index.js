const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to ejs
app.set('view engine', 'ejs'); // set the view engine as ejs
app.set('views', path.join(__dirname, 'views')); // set the views directory
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Define a route to render the index.ejs file


app.use('/dist', express.static(path.join(__dirname, "dist")));
app.use('/public', express.static(path.join(__dirname, "public")));
app.use(express.static('public'))
app.use(express.static('dist'))


app.get(__dirname + '/dist/output.css', (req, res) => { res.type('css'); res.sendFile(path.join(__dirname, 'dist', 'output.css')); });
app.get(__dirname + '/public/bundle.js', (req, res) => { res.type('js'); res.sendFile(path.join(__dirname, 'public', 'bundle.js')); })
app.get('/mnt/c/Users/Admin/Projects/dist/output.css', (req, res) => { res.type('css'); res.sendFile(path.join(__dirname, 'dist', 'output.css')); });
app.get('/mnt/c/Users/Admin/Projects/public/bundle.js', (req, res) => { res.type('css'); res.sendFile(path.join(__dirname, 'dist', 'output.css')); });

app.get('/', (req, res) => {
    let context = []
    const page = parseInt(req.query.page) || 1;

    // Call the scanDir function with the directory, limit, and page parameters
    // Render the index.ejs file and pass some data to it
    res.render('index', {
        title: 'Express Template',
        message: 'Hello from EJS',
        context: JSON.stringify(context),
        path: path.join(__dirname, '../dist/output.css'),
        scriptPath: path.join(__dirname, '../public/bundle.js'),
    });
});

// Define a route to handle the request for the paginated result

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port http://127.0.0.1:3000');
});
