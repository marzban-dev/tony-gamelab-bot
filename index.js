const TelegramBot = require('node-telegram-bot-api');
const token = "7331642173:AAFSxLUCX-PRVAaKGHtlmJVU7nXUJbtwJ4w";
let bot;

// if (process.env.NODE_ENV === 'production') {
bot = new TelegramBot(token);
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post(`/bot${token}`, (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Express server is listening on port 3000');
});

bot.setWebHook(`https://tony-gamelab-bot.vercel.app/bot${token}`);


// bot = new TelegramBot(token, { polling: true });

bot.on("start", async () => {
    console.log("testtttttttttttttttttttttttt")

})

bot.on('message', (msg) => {
    console.log("testtttttttttttttttttttttttt")

    const chatId = msg.chat.id;
    const response = `Hello, ${msg.from.first_name}! You said: "${msg.text}"`;
    bot.sendMessage(chatId, response);
});