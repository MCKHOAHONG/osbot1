module.exports = {
	name: 'ship',
	description: 'ghép đôi ghép cặp',
	execute(message, args) {
		function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
  
		if (!args[0]){
message.channel.send('Chẩn đoán: ' + `${message.author}` + ' tự kỷ ' + getRandomInt(0, 100) + "%")
}
		else{
  message.channel.send('Ship: ' + `${message.author}` + ' love ' + args[0] + " " + getRandomInt(0, 100) + "%")
}
	},
};