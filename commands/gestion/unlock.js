const {Bot} = require('../../structures/client')
const Discord = require('discord.js')

module.exports = {
    name: 'unlock',
    aliases: ['unlock'],

    /**
     * @param {Bot} client
     * @param {Discord.Message} message
     * @param {*} args 
     * @param {string} commandName 
     */
    run: async(client, message, args, commandName)=>{
        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply(`⚠️ **Vous n'avez pas la permission d'effectuer cette commande.**`)

        let channel = message.mentions.channels.first() || message.channel
        const role = message.guild.roles.cache.find(role => role.name === "@everyone")
        channel.permissionOverwrites.edit(role, {
            VIEW_CHANNEL: true,
            SEND_MESSAGES: true,
            READ_MESSAGE_HISTORY: true,
            ATTACH_FILES: false
        })
       const embed = new Discord.MessageEmbed()
       .setDescription(`🔓 **Le salon est déverrouillé**`)
       .setColor("YELLOW")
    
       message.channel.send({embeds : [embed]})



    }
}