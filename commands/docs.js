const {SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js')

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions(
            {
                label: "js",
                description: "Docs do js",
                value: "javascript"

            },
            {
                label: "python",
                description: "Docs do python",
                value: "python"
            },
            {
                label: "PHP",
                description: "Docs do php",
                value: "PHP"
            }
        )
    )

module.exports = {
    data: new SlashCommandBuilder()
    .setName("docs")
    .setDescription("Acessa a documentação da tecnologia"),

    async execute(interaction) {
        await interaction.reply({content: "Selecione uma das tecnologias abaixo", components: [row]})
    }
}