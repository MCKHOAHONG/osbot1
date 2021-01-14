module.exports = {
	name: 'pingeveryone',
	description: 'Ping everyone',
	args: true,
	execute(message, args) {
if (message.member.roles.cache.some(role => role.name === 'OS Staff')) {
	message.channel.bulkDelete(1)
		 message.channel.send('@everyone')
		}
		else {
	message.channel.send('Không có role ping cái giề, thích ăn ban hông?')
		}
	},
};