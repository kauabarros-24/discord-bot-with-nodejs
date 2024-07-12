const {SlashCommandBuilder} = require('discord.js')
const { execute } = require('./ping')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor música"),

    async execute(interaction) {
        await interaction.reply('https://open.spotify.com/intl-pt/artist/1eDIWVJt7ZWKsrXw5WVNsN')
    }
}