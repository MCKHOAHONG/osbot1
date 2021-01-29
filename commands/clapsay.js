module.exports = {
	name: 'clapsay',
	description: 'vỗ tay text',
	execute(message, args) {
	const reason = args.slice(0).join(' ');
		message.channel.send('👏' + reason + '👏')
	},
};