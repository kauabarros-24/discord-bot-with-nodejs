const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

const exampleEmbed = new EmbedBuilder()
    .setColor('Orange')
    .setTitle("Comandos do git: ")
    .addFields(
        {name: '\u2008', value: '\u2008'},
        {name: 'git init', value: 'Inicializa um repositório de Git'},
        {name: 'git config', value: 'Configura variáveis de ambiente do Git'},
        {name: "git clone", value: "Clona um repositório existente"},
        {name: "git add", value: 'Grava as mudanças no repositório'},
        {name: "git status", value: "Mostra o status de mudança"},
        {name: "git diff", value: 'Mostra as diferenças entre as mudanças realizadas'},
        {name: "git reset", value: "Reseta as mudanças no índice e do diretório de trabalho"},
        {name: "git rm", value: 'Remove os arquivos do diretório existente'},
        {name: "git mv", value: "Move ou renomeia os repositórios"}
    )
    
    .setFooter(
        {text: 'Todos os direitos reservados'}
    )


module.exports = {
    data: new SlashCommandBuilder()
    .setName("git")
    .setDescription("Comandos do git"),

    async execute(interaction) {
        await interaction.reply({embeds: [exampleEmbed]})
    }
}