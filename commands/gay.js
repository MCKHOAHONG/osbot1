module.exports = {
	name: 'gay',
	description: 'đo độ gay của bạn',
	execute(message) {
		function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
message.channel.send(`🏳️‍🌈Độ gay của ${message.author}: ` + getRandomInt(0, 100) + '%')
	},
};