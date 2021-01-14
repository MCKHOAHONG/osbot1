module.exports = {
	name: 'avatar',
	description: 'Truy cập avatar của người khác và của bạn.',
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Avatar của bạn: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `Avatar của ${user.username}: ${user.displayAvatarURL({ dynamic: true })}`;
		});

		message.channel.send(avatarList);
	},
};