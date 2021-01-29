module.exports = {
	name: 'invite',
	description: 'Link mời',
	execute(message) {
		message.channel.send('http://ourserverdiscord.ga/invite.html');
	},
};