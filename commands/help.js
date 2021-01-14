const Discord = require('discord.js');
module.exports = {
	name: 'help',
	description: 'Trợ giúp',
	args: true,
	execute(message, args) {
	if (!args[0])
	{
		const ErrorHelp = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('Lỗi!')
		.setThumbnail('https://media.discordapp.net/attachments/774241371534917665/785192687758082059/logoos.jpeg')
		.addFields(
		{ name: 'Vui lòng chọn 1 trong các chủ đề dưới đây!', value:'general\nmusic\nstaff\ndonator' }
		)
		.setFooter('Bot được lập trình và điều hành bởi CookieGMVN.', 'https://cdn.discordapp.com/avatars/584411132769337440/1b40e8c2b374f8117c70b3546d672705.webp')
		message.channel.send(ErrorHelp);
		}
		else if (args[0] === 'general')
		{
			const HelpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("★《Oᑌᖇ SEᖇᐯEᖇ》★ BOT HELP - CookieGMVN")
	.setAuthor("★《Oᑌᖇ SEᖇᐯEᖇ》★ BOT", 'https://media.discordapp.net/attachments/774241371534917665/785192687758082059/logoos.jpeg')
	.setDescription('Câu lệnh này sẽ cho bạn biết bạn có thể làm gì với bot!')
	.setThumbnail('https://media.discordapp.net/attachments/774241371534917665/785192687758082059/logoos.jpeg')
	.addFields(
        { name: 'Các lệnh:', value: ">verifyrole\n>avatar\n>help\n>server-info\n>noausay\n>partner\n>say\n>report\n>dj\n>copyright", inline: true},
	)
	.setFooter('Bot được lập trình và điều hành bởi CookieGMVN.', 'https://cdn.discordapp.com/avatars/584411132769337440/1b40e8c2b374f8117c70b3546d672705.webp')

message.channel.send(HelpEmbed);
		}
		else if (args[0] === 'donator')
		{
			const HelpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("Đang bảo trì...")
	.setDescription('Đang bảo trì! Vui lòng nhập 1 command khác!')
	.setFooter('Bot được lập trình và điều hành bởi CookieGMVN.', 'https://cdn.discordapp.com/avatars/584411132769337440/1b40e8c2b374f8117c70b3546d672705.webp')

message.channel.send(HelpEmbed);
		}
		else if (args[0] === 'music')
		{
const MusicHelpEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("★《Oᑌᖇ SEᖇᐯEᖇ》★ BOT MUSIC HELP - CookieGMVN")
	.setAuthor("★《Oᑌᖇ SEᖇᐯEᖇ》★ BOT", 'https://media.discordapp.net/attachments/774241371534917665/785192687758082059/logoos.jpeg')
	.setDescription('Câu lệnh này sẽ cho bạn biết bạn có thể làm gì với bot ★《Oᑌᖇ SEᖇᐯEᖇ》★ DJ!')
	.setThumbnail('https://media.discordapp.net/attachments/774241371534917665/785192687758082059/logoos.jpeg')
	.addFields(
        { name: 'Lưu ý!', value: "Trước khi dùng, vui lòng vào <#785119280660217876> và nhập lệnh >dj để mở khóa tất cả tính năng của bot!"},
        { name: 'Prefix', value: "."},
        { name: 'Lệnh', value: 'help\nplay[p]\nclear[stop]\nvol\nskip\nlyrics[lyric]', inline: true},
        { name: 'Lời cuối nè', value: "Để tìm hiểu kỹ hơn, vui lòng nhập lệnh .help!"}
	)
	.setFooter('Bot được lập trình và điều hành bởi CookieGMVN.', 'https://cdn.discordapp.com/avatars/584411132769337440/1b40e8c2b374f8117c70b3546d672705.webp')

message.channel.send(MusicHelpEmbed);
			}
		else if (args[0] === 'staff')
		{
			const StaffHelpEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
	.setTitle("★《Oᑌᖇ SEᖇᐯEᖇ》★ BOT HELP - CookieGMVN")
	.setAuthor("★《Oᑌᖇ SEᖇᐯEᖇ》★ BOT", 'https://media.discordapp.net/attachments/774241371534917665/785192687758082059/logoos.jpeg')
	.setDescription('Câu lệnh này sẽ cho bạn biết bạn có thể làm gì với bot ★《Oᑌᖇ SEᖇᐯEᖇ》★ BOT!(Version Staff)')
	.setThumbnail('https://media.discordapp.net/attachments/774241371534917665/785192687758082059/logoos.jpeg')
	.addFields(
        { name: 'Prefix', value: ">"},
        { name: 'Lệnh', value: '>clear\n>warn\n>ban'},
	)
	.setFooter('Bot được lập trình và điều hành bởi CookieGMVN.', 'https://cdn.discordapp.com/avatars/584411132769337440/1b40e8c2b374f8117c70b3546d672705.webp')

message.channel.send(StaffHelpEmbed);
			}
}		

	}