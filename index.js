const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const openai = require('./config/openai.js');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// Set the view engine to ejs
app.set('view engine', 'ejs'); // set the view engine as ejs
app.set('views', path.join(__dirname, 'views')); // set the views directory
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Define a route to render the index.ejs file

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/dist', express.static(path.join(__dirname, "dist")));
app.use('/public', express.static(path.join(__dirname, "public")));
app.use(express.static('public'))
app.use(express.static('dist'))


app.get(__dirname + '/dist/output.css', (req, res) => { res.type('css'); res.sendFile(path.join(__dirname, 'dist', 'output.css')); });
app.get(__dirname + '/public/bundle.js', (req, res) => { res.type('js'); res.sendFile(path.join(__dirname, 'public', 'bundle.js')); })

app.get('/mnt/c/Users/Admin/Projects/dist/output.css', (req, res) => { res.type('css'); res.sendFile(path.join(__dirname, 'dist', 'output.css')); });
app.get('/mnt/c/Users/Admin/Projects/public/bundle.js', (req, res) => { res.type('js'); res.sendFile(path.join(__dirname, 'public', 'bundle.js')); });

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
        postRoute: 'http://127.0.0.1:3000' + '/api',

    });
});

app.post('/api', async (req, res) => {
    try {
        let context = JSON.parse(req.body.context ?? '[]');
        let input = req.body.input ?? '';

        const messages = context


        const prePrompt = ''
        // const prePromptOneTime = ``
        // const postPromptReminder = ''
        const prePromptOneTime = 'User I\'ve attached an interpreter to your responses, from now on, please always respond in a properly formatted json object, any messages need to be given to the message property, do not use special characters in your messages, the interpreter is able to send you back prompts with context and information, you can use it to search the internet by adding a request property, and providing an array of search queries, the interpreter will respond back with the urls and pages for those queries to provide context, please use the interpreter to look up context, and provide me an answer to my questions. Here is my first message: '

        const postPromptReminder = ' (Please remember, when giving me a response,  write out all of the long detailed passage with highly detailed and 10 long paragraphs, take your time with all descriptions, go into great depth over each topic, give me a list of options to choose from, following a selection with highly detailed and long paragraphs, take your time with all descriptions, go into great depth over each topic)'


        if (context.length < 1) {
            messages.push({ role: 'user', content: prePromptOneTime + ' ' + input })
        } else {
            messages.push({ role: 'user', content: input + postPromptReminder })
        }

        const completion = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: messages,
        });


        const completionText = completion.data.choices[0].message.content.trim();
        
        messages.push({ role: 'assistant', content: completionText })

        // Render the index.ejs file and pass some data to it
        return res.send(
            {
                title: 'Express Template',
                message: completionText,
                context: JSON.stringify(messages),
                path: path.join(__dirname, '../dist/output.css'),
                scriptPath: path.join(__dirname, '../public/bundle.js'),
                postRoute: 'http://127.0.0.1:3000' + '/api',
            });

    } catch (error) {
        res.status(400).send(error)
    }
}
)
// Define a route to handle the request for the paginated result

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port http://127.0.0.1:3000');
});
