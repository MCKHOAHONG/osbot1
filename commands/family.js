const Discord = require('discord.js');
module.exports = {
	name: 'family',
	description: 'Gia đình của bot',
	execute(message) {
		const FamilyEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.addFields(
        { name: 'Bố:', value: "<@584411132769337440>" },
        { name: 'Mẹ:', value: "<@696535891044204606>" },
        { name: 'Đồng nghiệp', value: "<@642741865938157578>" },
	)
	message.channel.send(FamilyEmbed)
	}}