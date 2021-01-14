module.exports = {
	name: 'server-info',
	description: 'Thông tin về server',
	args: true,
	execute(message, args) {
		message.channel.send(`Tên Server: ${message.guild.name}\nTổng thành viên: ${message.guild.memberCount}`);
	},
};