module.exports = {
	name: 'rmmod',
	description: 'Xóa role mod',
	args: true,
	execute(message, args) {
			if (`${message.author}` === '<@584411132769337440>')
{
	message.member.roles.add('781123759687991326')
	message.member.roles.remove('772818200160632872')
	}
	else { message.reply('M tuổi <:OSum:793818715727724574>')
	}
	},
};