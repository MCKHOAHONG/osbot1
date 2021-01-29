const Discord = require('discord.js')
module.exports = {
	name: 'donatorlist',
	description: 'Thông tin về các người đã donate cho bot',
	args: true,
	execute(message, args) {
		const HelpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("★《Oᑌᖇ SEᖇᐯEᖇ》★ BOT DONATOR - CookieGMVN")
	.setAuthor("★《Oᑌᖇ SEᖇᐯEᖇ》★ BOT", 'https://media.discordapp.net/attachments/774241371534917665/785192687758082059/logoos.jpeg')
	.setDescription('Danh sách những người tốt bụng và cool ngầu đã donate cho bot! Cảm ơn mọi người nhiều!')
	.setThumbnail('https://media.discordapp.net/attachments/774241371534917665/785192687758082059/logoos.jpeg')
	.addFields(
        { name: 'Copper Donator', value: "<@755383774350540860>, <@740029490079465596>", inline: true},
        { name: 'Silver Donator', value: "Chả có ai...", inline: true},
        { name: 'Gold Donator', value: "<@558136705778188298>", inline: true},
        { name: 'Diamond Donator', value: "Hông có luôn :v", inline: true},
        { name: 'SUPER DONATOR', value: "<@782089780401930291>, <@720638272287670433>", inline: true},
	)
	.setFooter('Bot được lập trình và điều hành bởi CookieGMVN.', 'https://cdn.discordapp.com/avatars/584411132769337440/1b40e8c2b374f8117c70b3546d672705.webp')

message.channel.send(HelpEmbed);
	},
};