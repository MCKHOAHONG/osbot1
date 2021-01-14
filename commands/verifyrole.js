module.exports = {
	name: 'verifyrole',
	description: 'Xác nhận role',
	execute(message) {
		if (message.member.roles.cache.some(role => role.name === 'Verified Member')) {
		 message.author.send('Bạn đã có Role này trước đó rùi mà :v')
		}
		else if (message.member.roles.cache.some(role => role.name === 'Muted')) {
			message.author.send('Bạn đang bị Mute. Thử lại sau nhá!')
		}
		else {
			message.member.roles.add('785119322997260299')
	message.author.send(`Đã set role cho ${message.author}! Chào mừng bạn tới Server ${message.guild.name}!`)
		}
    }
};