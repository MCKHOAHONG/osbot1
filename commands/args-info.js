module.exports = {
	name: 'args-info',
	description: 'Thông tin về các xâu kí tự',
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Từ đầu tiên: ${args[0]}`);
	},
};