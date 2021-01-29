module.exports = {
	name: 'premium',
	description: 'Thông tin về premium',
	execute(message) {
		message.channel.send('Server này đang sử dụng gói Enterprise, gói cước được tặng bởi CookieGMVN#9173.\nThời hạn: Unlimited.');
	},
};