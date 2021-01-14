module.exports = {
	name: 'dj',
	description: 'Set role DJ',
	execute(message) {
if (message.member.roles.cache.some(role => role.name === 'DJ')) {
		 message.author.send('Bạn đã có Role này trước đó rùi mà :v')
		}
		else {
			message.member.roles.add('787283353912213506')
	message.author.send(`Đã set role cho ${message.author}!`)
}
}
}