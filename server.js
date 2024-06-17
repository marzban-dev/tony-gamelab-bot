const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const botToken = '7331642173:AAFSxLUCX-PRVAaKGHtlmJVU7nXUJbtwJ4w';
const gameUrl = 'https://google.com';

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Telegram Game Server');
});

// Endpoint to serve the game
app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint to set game score
app.post('/setScore', (req, res) => {
    const { user_id, score } = req.body;

    // axios.post(`https://api.telegram.org/bot${botToken}/setGameScore`, {
    //     user_id,
    //     score,
    //     force: true
    // })
    //     .then(response => {
    //         res.json(response.data);
    //     })
    //     .catch(error => {
    //         res.status(500).json(error.response.data);
    //     });
});

// Endpoint to get high scores
app.post('/getHighScores', (req, res) => {
    const { user_id, chat_id } = req.body;

    // axios.get(`https://api.telegram.org/bot${botToken}/getGameHighScores`, {
    //     params: { user_id, chat_id }
    // })
    //     .then(response => {
    //         res.json(response.data);
    //     })
    //     .catch(error => {
    //         res.status(500).json(error.response.data);
    //     });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
