module.exports = {
	name: 'say',
	description: 'Dùng bot thay lời bạn nói',
	args: true,
	execute(message, args) {
	if(!args[0]){
		message.reply('Bot không biết phải nói gì...')
		}
	else{
		message.channel.bulkDelete(1)
		const talk = args.slice(0).join(' ');
		message.channel.send(talk + ` - Được gửi từ ${message.author}`)
		}
	},
}