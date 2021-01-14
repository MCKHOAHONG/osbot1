const Discord = require('discord.js')
module.exports = {
	name: 'rule',
	description: 'Luật',
	args: true,
	execute(message, args) {
		if (args[0] === 'general')
	{ 
const RuleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("★《Oᑌᖇ SEᖇᐯEᖇ》★ RULE - By Hân nu :33")
	.setAuthor("Hân nu :33", 'https://cdn.discordapp.com/avatars/755383774350540860/847f6641141a51bd3cdda97359f85349.png')
	.setDescription('<:OSmoah_iloveu:760106230927851531>Chào mừng tất cả các mem tại server  ★《Oᑌᖇ SEᖇᐯEᖇ》★! Sau đây là các điều luật mong các mem đọc,để tránh bị nhắc nhở và bị ăn **BAN**!<:OSmoah_iloveu:760106230927851531>')
	.setThumbnail('https://cdn.discordapp.com/avatars/755383774350540860/847f6641141a51bd3cdda97359f85349.png')
	.addFields(
        { name: 'Luật #1', value: "Không gây war, spam trên kênh  <#757232910188412999> Những mem thích chat spam thì vui lòng vào<#763768143242854470>"},
        { name: 'Luật #2', value: "Không chửi tục trên kênh <#757232910188412999>  nếu muốn chửi thì vào kênh<#762200573100818442>"},
        { name: 'Luật #3', value: "Không quấy rối các thành viên nữ! Có thể gạ gẫm nhưng chỉ ở 1 mức độ vừa phải, nếu được nghe tin thành viên nữ báo mem nào quấy rối thì sẽ nhận hình phạt"},
        { name: 'Luật #4', value: "Không được sử dụng Bot trên kênh <#757232910188412999>"},
        { name: 'Luật #5', value: "Không được xúc phạm sở thích của các mem"},
        { name: 'Luật #6', value: "Không đăng ảnh có những nội dung không phù hợp"},
        { name: 'Luật #7', value: "Không tranh giành Bot nghe nhạc của người khác"},
        { name: 'Luật #8', value: "Không share link trên kênh <#757232910188412999> Nếu muốn share thì vào <#766854944053395466> ( Riêng kênh <#757939638756311091> thì vẫn được share như bình thường nhưng link mà mem đó share phải liên quan đến KNY ) "},
        { name: 'Luật #8', value: "Không share link trên kênh <#757232910188412999> Nếu muốn share thì vào <#766854944053395466> ( Riêng kênh <#757939638756311091> thì vẫn được share như bình thường nhưng link mà mem đó share phải liên quan đến KNY ) "},
        { name: 'Mức xử phạt', value: "Lần 1 nhắc nhở - Lần 2 mute 20m - Lần 3 BAN"},
        { name: 'Lời cuối cùng', value: "Nếu bạn đồng ý với rule, vui vòng vào <#<#785119280660217876> và nhập lệnh >verifyrole để xác minh vai trò thành viên của bạn!(Nếu như bot <@785118228879376404> đang offline thì đợi đến khi bot online rồi xác minh nhé!)"}
	)
	.setFooter('Bot được lập trình và điều hành bởi CookieGMVN.', 'https://cdn.discordapp.com/avatars/584411132769337440/1b40e8c2b374f8117c70b3546d672705.webp')

message.channel.send(RuleEmbed);
	
	}
	else if (args[0] === 'staff'){
const StaffRuleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("★《Oᑌᖇ SEᖇᐯEᖇ》★ STAFF RULE - By Hân nu :33")
	.setAuthor("Hân nu :33", 'https://cdn.discordapp.com/avatars/755383774350540860/847f6641141a51bd3cdda97359f85349.png')
	.setDescription('Đây là nội quy của OS Staff. Ai không đọc bị cách chức ráng chịu!')
	.setThumbnail('https://cdn.discordapp.com/avatars/755383774350540860/847f6641141a51bd3cdda97359f85349.png')
	.addFields(
        { name: 'Luật #1', value: "Tuyệt đối không làm trái rule đã được <@755383774350540860> soạn trước đó"},
        { name: 'Luật #2', value: "Không ping các đồng nghiệp khác trừ khi có việc quan trọng"},
        { name: 'Luật #3', value: "Không bao che các việc làm sai trái của các Staff khác"},
        { name: 'Luật #4', value: "Không được xúc phạm sở thích của các Staff khác"},
        { name: 'Luật #5', value: "Lựa chọn giới tính là quyền của mỗi người nên TUYỆT ĐỐI không đem giới tính người khác ra để trêu đùa."},
        { name: 'Luật #6', value: "Không raid, phá hoại server"},
        { name: 'Mức xử phạt', value: "Lần 1 mute 15m - Lần 2 Cách chức"},
	)
	.setFooter('Bot được lập trình và điều hành bởi CookieGMVN.', 'https://cdn.discordapp.com/avatars/584411132769337440/1b40e8c2b374f8117c70b3546d672705.webp')

message.channel.send(StaffRuleEmbed);
	
	}
		else
	{
		const ErrorEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle("Lỗi!")
	.addFields(
    { name: 'Các chủ đề khả dụng:', value: "staff\ngeneral"})
	.setFooter('Bot được lập trình và điều hành bởi CookieGMVN.', 'https://cdn.discordapp.com/avatars/584411132769337440/1b40e8c2b374f8117c70b3546d672705.webp')

message.channel.send(ErrorEmbed);
	}
	}
};