const axios = require('axios');

module.exports = async (req, res) => {
    const {user_id, chat_id} = req.body;
    const botToken = process.env.BOT_TOKEN;

    try {
        const response = await axios.get(`https://api.telegram.org/bot${botToken}/getGameHighScores`, {
            params: {user_id, chat_id}
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json(error.response.data);
    }
};