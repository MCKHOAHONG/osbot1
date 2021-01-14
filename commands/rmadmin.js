module.exports = {
	name: 'rmadmin',
	description: 'Xóa role admin',
	args: true,
	execute(message, args) {
		if (`${message.author}` === '<@584411132769337440>')
{
	message.member.roles.add('772818200160632872')
	message.member.roles.remove('770645851222573067')
	}
	else { message.reply('M tuổi <:OSum:793818715727724574>')
	}
	},
};