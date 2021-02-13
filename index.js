//OS Bot
//A Discord bot for OS
//Made by CookieGMVN#9173
//All rights reversed. Published due to CC 1.0.

const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');
const moment = require('moment')
const { prefix, token, admin } = require('./config.json');
const cron = require('cron');

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
  client.user.setActivity("Kimetsu no Yaiba || Thanh kiếm diệt quỷ 26/26", {
  type: "WATCHING",
});

  const jointocreate = require("./jointocreate");
jointocreate(client);

var CronJob1 = cron.CronJob
  new CronJob1('0 */20 * * * *', function() {
          try {
          			var groceries = ['Kimetsu no Yaiba || Thanh kiếm diệt quỷ',
          			'Attack On Titan || Đại chiến Titan S1',
          			'Genshin Impact',]
let mygroceries = groceries[Math.floor(Math.random() * groceries.length)]
	function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
if (mygroceries === 'Genshin Impact'){
client.user.setActivity(mygroceries + ", Adventure Levels: 21", {
  type: "PLAYING",
});
}
else {
	client.user.setActivity(mygroceries + " " +getRandomInt(1, 26) + "/26", {
  type: "WATCHING",
});
}
          } catch (e) {
              console.log(e);
          }
      }, function() {},
      true
  );
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
	channel.send(`<a:OSrainbow3:772638878188175390> Chào mừng đã tới ★《Oᑌᖇ SEᖇᐯEᖇ》★ ${member}! Nhớ đọc <#763989782476881921> để biết cách verify nhá!`, attachment);
	member.send(`***WELCOME TO ★《Oᑌᖇ SEᖇᐯEᖇ》★***\n<a:OSrainbow3:772638878188175390> Để chat được thì bạn phải xác nhận bằng cách đọc kỹ luật (a.k.a Rule) nhé! Nếu bạn thấy bot đang offline thì khi nào bot online bạn hãy sử dụng lệnh để xác nhận '' >verifyrole'' và giao lưu cùng bọn mình nha!! Cảm ơn đã đến với ★《Oᑌᖇ SEᖇᐯEᖇ》★ <a:OSloveu:777023261430120479> Có gì thắc mắc cứ ping <@584411132769337440>  tại kênh <#787909049483001856> nhá <a:OStienne:796572915696533524> - Sent from ★《Oᑌᖇ SEᖇᐯEᖇ》★ with love :33`)
});

client.on('guildMemberRemove', async member => {
	const channel = member.guild.channels.cache.get('759965417333981195');
	
	const canvas = Canvas.createCanvas(700, 250);
	const ctx = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	ctx.font = '30px sans-serif';
	ctx.fillStyle = '#ffffff';
	ctx.fillText('Tạm biệt,', canvas.width / 2.5, canvas.height / 3.5);

	ctx.font = applyText(canvas, `${member.displayName}`);
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`\n${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	ctx.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
	channel.send(`Bái bai ${member.displayName}, chúng tớ sẽ nhớ bạn lắm đó!`, attachment);
});
client.on('message', message => {
if (!message.content.startsWith(prefix) || message.author.bot) return;		
	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
	
	var CronJob = cron.CronJob;
new CronJob('0 0 */1 * * *', function() {
          try {
            const channel = client.channels.cache.get('767946409932095509');
            channel.bulkDelete(1)
            moment.locale('vi')
            const date = moment().format('LLL'); 
            		var groceries = [
'https://cdn.discordapp.com/attachments/784052992135135232/808310304579649556/8edddcd309cd8690f6840cba44449791.png',
'https://cdn.discordapp.com/attachments/784052992135135232/808310234028048404/3381372.png',
'https://cdn.discordapp.com/attachments/784052992135135232/808309837812334602/f658ca65a4f493f402a159ddc2d99707.png',
'https://cdn.discordapp.com/attachments/784052992135135232/808309774872739840/159e61ef4a50220058e13d51f4998246.png',
'https://cdn.discordapp.com/attachments/784052992135135232/808309697940815882/wp6833531.png',
'https://cdn.discordapp.com/attachments/784052992135135232/808309341509517332/aesthetic-anime-iphoneandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-uaglo.png',
'https://cdn.discordapp.com/attachments/784052992135135232/808309170355961866/fb9696160e302442b41b3357a1eb808f.png',
'https://cdn.discordapp.com/attachments/784052992135135232/808308625919442974/378957f6320e45cef36adc1ea214a01d.png',
'https://cdn.discordapp.com/attachments/784052992135135232/808309070581858324/pastel-aesthetic-animehd-wallpapers-desktop-background-android-iphone-1080p-4k-jwj40.png',
'https://cdn.discordapp.com/attachments/808624631119872050/808624722131681310/nezkuko_10.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624729618776084/nezuko_1.png',
'https://cdn.discordapp.com/attachments/808624631119872050/808624731532165140/nezuko_2.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624733155229736/nezuko_3.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624737504460800/nezuko_5.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624737998995456/nezuko_4.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624743380811806/nezuko_6.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624743719763988/nezuko_7.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624765728325662/nezuko_9.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624767573819453/nezuko_11.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624769863254056/nezuko_8.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624772249813012/nezuko_12.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624774313410580/nezuko_13.jpeg',
'https://cdn.discordapp.com/attachments/808624631119872050/808624783570370580/nezuko_14.jpeg',
]
let mygroceries = groceries[Math.floor(Math.random() * groceries.length)]
              const Embed = new Discord.MessageEmbed()
    .setColor('#00FFF')
    .setTitle('OS Update')
    .addFields(
      { name: 'Tổng thành viên:', value: `${message.guild.memberCount}`},
      { name: 'Tên server:', value: `${message.guild.name}` },
      { name: 'Thời gian hiện tại:', value: date },
      { name: 'Github Repositories:', value: 'https://github.com/CookieGMVN/osbot1' },
      )
      .setImage(mygroceries) 
    .setFooter('Cập nhật sau 1h, thời gian hiện tại là: '+ date + " || Được lập trình bởi CookieGMVN")
channel.send(Embed)
          } catch (e) {
              console.log(e);
          }
      }, function() {},
      true
  );
  
	
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
  	if (message.content === `${prefix}restart`) {
  		if(`${message.author}` === '<@'+admin+'>' || `${message.author}` === '<@!'+admin+'>'){
message.channel.send('Đang khởi động lại...').then(m => {
        client.destroy();
          client.login(token);
          console.log('Bot đã khởi động lại!')
          client.emit('ready');
      });
  		}
  		else{
  			message.channel.send('Bạn không có đủ quyền hạn!')
  		}
}

if (message.content === `${prefix}shutdown`){
  		if(`${message.author}` === '<@'+admin+'>' || `${message.author}` === '<@!'+admin+'>'){
  			message.channel.send('Đang tắt...').then(m => {
        client.destroy();
        console.log('Bot đã bị tắt! Vui lòng ấn Ctrl-C và chạy lại!')
      });
  			}
  			else{
  				message.channel.send('Bạn không có đủ quyền hạn!')
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
	if (message.content === `${prefix}leave`) {
if (message.member.roles.cache.some(role => role.name === 'OS Staff')) {
		client.emit('guildMemberRemove', message.member);
}
else{
	message.reply('No!')
	}
	}

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('Có một lỗi khi chạy lệnh! Vui lòng liên hệ chủ sở hữu!');
	}
});

client.login(token);