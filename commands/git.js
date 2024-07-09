const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Comandos do git"),

    async execute(interaction) {
        await interaction.reply({embeds: [exampleEmbed]})
    }
}