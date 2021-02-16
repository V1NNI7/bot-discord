const discord = require('discord.js');
const bot = new discord.Client();
const token = 'ODExMjM3MDAwOTM3NDcyMDIx.YCvRVQ.6o6cLeUfDd9xBt-7PNnlkFlOJwM';

bot.login(token);
bot.on('Ready', () => {
    console.log('Estou pronto!')
});

bot.on('message', msg => {
    if (msg.content == 'E ai galera!') {
        msg.reply('Olá! Seja bem-vindo(a) ao nosso canal')
    }
});