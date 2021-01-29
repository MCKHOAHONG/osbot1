module.exports = {
	name: '8ball',
	description: 'trả lời ngẫu nhiên',
	execute(message, args) {
		if(!args[0]){
			message.channel.send("Vui lòng nhập 1 câu hỏi để bot trả lời!")
			}
			else{
		var groceries = [
'có',
'không',
]
let mygroceries = groceries[Math.floor(Math.random() * groceries.length)]
message.channel.send('Hình như là ' + mygroceries)
}
	},
};