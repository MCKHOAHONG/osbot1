const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
console.log('Logged!');
  console.log('Loaded 16 built-in plugins, 0 external plugin.')
  console.log('Prefix là:' + prefix)
  client.user.setActivity('Bảo trì xong! Mã nguồn tại https://github.com/CookieGMVN/osbot', {
  type: "PLAYING",
	});
});

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');
	let fontSize = 70;

	do {
		ctx.font = `${fontSize -= 10}px sans-serif`;
	} while (ctx.measureText(text).width > canvas.width - 300);

	return ctx.font;
};

client.on('guildMemberAdd', async member => {
	const channel = member.guild.channels.cache.get('755622434014625884');
	
	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '25px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Chào mừng tới \n★《Oᑌᖇ SEᖇᐯEᖇ》★,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}!`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`\n${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
	channel.send(`Chào mừng đã tới ★《Oᑌᖇ SEᖇᐯEᖇ》★ ${member}! Nhớ đọc <#763989782476881921> để biết cách verify nhá!`, attachment);
	member.send(`***WELCOME TO ★《Oᑌᖇ SEᖇᐯEᖇ》★***\n<a:OSrainbow3:772638878188175390> Để chat được thì bạn phải xác nhận bằng cách đọc kỹ luật (a.k.a Rule) nhé! Nếu bạn thấy bot đang offline thì khi nào bot online bạn hãy sử dụng lệnh để xác nhận '' >verifyrole'' và giao lưu cùng bọn mình nha!! Cảm ơn đã đến với ★《Oᑌᖇ SEᖇᐯEᖇ》★ <a:OSloveu:777023261430120479> Có gì thắc mắc cứ ping <@584411132769337440>  tại kênh <#787909049483001856> nhá <a:OStienne:796572915696533524> - Sent from ★《Oᑌᖇ SEᖇᐯEᖇ》★ with love :33`)
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
	}
}
	
	if (message.content === `${prefix}join`) {
if (message.member.roles.cache.some(role => role.name === 'OS Staff')) {
		client.emit('guildMemberAdd', message.member);
}
else{
	message.reply('No!')
	}
	}
	
	else if (command === 'clear'){
		if (message.member.roles.cache.some(role => role.name === 'OS Staff')) {
		 if (!args[0])
		 {
		 	message.channel.send('Vui lòng nhập số tin nhắn bạn muốn xóa!')
		 }
		 else
		 {
		 	message.channel.bulkDelete(args[0])
		 .then(messages => message.channel.send(`Đã xóa ${messages.size} (các) tin nhắn.`))
       .catch(console.error)
	  setTimeout(() => {  message.channel.bulkDelete(1); }, 1000);
		}
		 }
		else {
			message.channel.send('Bạn không có vai trò quản trị. Liên hệ CookieGMVN#9173 để biết thêm chi tiết.')
		}
    }
else if (command === 'report'){
	if (args.length < 2) {
		return message.reply('Vui lòng ping ai đó và cung cấp lý do để report người dùng!');
	}

	const user = getUserFromMention(args[0]);
	if (!user) {
		return message.reply('Vui lòng sử dụng ping để đề cập người dùng đó!');
	}

	const reason = args.slice(1).join(' ');
	const channel = client.channels.cache.get('766678808085528626');
		channel.send(`Người dùng ` + args[0] + ` đã bị tố cáo bởi ${message.author} với lý do: ` + reason);
}
else if (command === 'warn') {
	if (message.member.roles.cache.some(role => role.name === 'OS Staff')) {
	if (args.length < 2) {
		return message.reply('Vui lòng ping ai đó và cung cấp lý do để warn người dùng!');
	}

	const user = getUserFromMention(args[1]);
	if (!user) {
		return message.reply('Vui lòng sử dụng ping để đề cập người dùng đó!');
	}

	const reason = args.slice(1).join(' ');
	const channel = client.channels.cache.get('766678653852975125');
		channel.send(`Người dùng ` + args[0] + ` đã bị warn bởi ${message.author} với lý do: ` + reason);
}
}    
else if (command === 'ban') {
	if (message.member.roles.cache.some(role => role.name === 'OS Staff')) {
	if (args.length < 2) {
		return message.reply('Vui lòng ping ai đó và cung cấp lý do để ban người dùng!');
	}

	const user = getUserFromMention(args[0]);
	if (!user) {
		return message.reply('Vui lòng sử dụng ping để đề cập người dùng đó!');
	}

	const reason = args.slice(1).join(' ');
	try {
		 message.guild.members.ban(user, { reason });
	} catch (error) {
		const channel = client.channels.cache.get('766679953953259571');
		return channel.send(`Không thể ban **${user.tag}**: ${error}`);
	}
const channel = client.channels.cache.get('766679953953259571');
	return channel.send(`Ban thành công **${user.tag}** ra khỏi server!`);
}
else {
	message.channel.send(`Bạn không có đủ quyền hạn để thực hiện tác vụ này! Vui lòng liên hệ CookieGMVN#9173 để biết thêm thông tin chi tiết!`)
}
}    

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);