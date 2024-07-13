const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
    .setColor('Green')
    .setTitle("Sobre o bot: ")
    .addFields(
        { name: "Dono", value: "Kauã Martins Barros", inline: true },
        { name: "Email", value: "martinsbarroskaua85@gmail.com", inline: true },
        { name: "Profile", value: "https://github.com/kauabarros-24", inline: true }
    )
    .setFooter({ text: 'Todos os direitos reservados' });

module.exports = {
    data: new SlashCommandBuilder()
        .setName("bot")
        .setDescription("Sobre o bot"),
    
    async execute(interaction) {
        await interaction.reply({ embeds: [exampleEmbed] });
    }
};
