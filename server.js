const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const botToken = process.end.TELEGRAM_TOKEN;
const bot = new TelegramBot(botToken, { polling: true });
const gameShortName = 'YOUR_GAME_SHORT_NAME';

// Command to start the game
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendGame(chatId, gameShortName)
        .then(response => {
            console.log('Game sent:', response);
        })
        .catch(error => {
            console.error('Error sending game:', error);
        });
});

// Handling callback queries (for inline game buttons)
bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    const userId = query.from.id;

    // Set or get score based on callback data
    if (query.data === 'getScore') {
        axios.post(`https://api.telegram.org/bot${botToken}/getGameHighScores`, {
            user_id: userId,
            chat_id: chatId
        })
            .then(response => {
                bot.answerCallbackQuery(query.id, {
                    text: `High Scores: ${JSON.stringify(response.data.result)}`
                });
            })
            .catch(error => {
                bot.answerCallbackQuery(query.id, {
                    text: 'Error getting scores'
                });
            });
    }
});

console.log('Bot is running...');