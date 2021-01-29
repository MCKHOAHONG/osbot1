module.exports = {
	name: 'checkdm',
	description: 'Kiểm tra DMs',
	execute(message) {
		try{
		message.author.send('Check DM thành công!');
		}
		catch(error){
			console.error(error)
			}
	},
};