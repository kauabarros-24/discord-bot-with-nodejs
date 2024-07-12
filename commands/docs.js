const {SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder, Component} = require('discord.js')

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
        .setCustomId("select")
        .setPlaceholder("Nenhuma linguagem selecionada")
        .addOptions(
        {
            label: "Javascript",
            description: "Veja a documentação do javascript",
            value: "javascript",
        },
        {
            label: "Python",
            description: "Veja a documentação do Python",
            value: "Python",

        },
        {
            label: "C#",
            description: "Veja a documentação do C#",
            value: "C#",

        },
    )
    )

module.exports = {
    data: new SlashCommandBuilder()
    .setName("docs")
    .setDescription("Veja a a documentação das linguagens"),

    async execute(interaction) {
        await interaction.reply("Selecione uma das linguagens abaixo: ", components:    )
    }
} 