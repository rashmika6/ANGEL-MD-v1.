const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "HU0giA6Y#w9kkDzlJsEFiVdvdxTZYBaJur_k7EzrfAyUdGl6IqOw", /* you sessin_id */
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.fm/u/44nfrrb8xk",
ALIVE_MSG: process.env.ALIVE_MSG || "ඔව් rash තමයි කියන්න අපෙ බොට්ලට ඔය එක බොටෙක්වත් අදාල නැ මහත්තයෝ 😂🚫🌐🔥",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "true",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "ANGEL MD",
LANG: process.env.LANG || "SI"
};
