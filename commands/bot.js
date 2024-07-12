const {SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js')
const { execute } = require('./ping')

const exampleEmbed = new EmbedBuilder()
    .setColor('Green')
    .setTitle("Sobre o bot: ")
    .addFields(
        {name: "Dono", value: "Kauã Martins Barros", inline: true},
        {name: "email", value:"martinsbarroskaua85@gmail", inline: true},
        {name: "github", value: ""}
    )
    .addFields (
        {name: "Profile", value: "https://github.com/kauabarros-24?tab=repositories", inline: true}
    )
    
    .setFooter(
        {text: 'Todos os direitos reservados'}
    )

module.exports = {
    data: new  SlashCommandBuilder()
    .setName("bot")
    .setDescription("Sobre o bot"),
    
    async execute(interaction) {
        await interaction.reply({embeds: [exampleEmbed]})
    }
}