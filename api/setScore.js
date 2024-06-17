const axios = require('axios');

module.exports = async (req, res) => {
    const { user_id, score } = req.body;
    const botToken = process.env.BOT_TOKEN;

    try {
        const response = await axios.post(`https://api.telegram.org/bot${botToken}/setGameScore`, {
            user_id,
            score,
            force: true
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json(error.response.data);
    }
};
