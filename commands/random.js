module.exports = {
	name: 'random',
	description: 'ngẫu nhiên',
	execute(message, args) {
		function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
message.channel.send(getRandomInt(args[0], args[1]))
	},
};