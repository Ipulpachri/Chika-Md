/*
› Create By @Jaka
› Base Ori @Jaka
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasPrdn',
}

//—————「 Setting Owner 」—————//
global.owner = ['6285713041886','6285713041886','6285713041886'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6285713041886'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6285713041886' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Fachri' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'FachriBot-Md' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'ᴹᴿ᭄FachriBot-Mdོ' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/c/SaefulFahri'
global.ig = 'https://instagram.com/sfdesign_id'
global.mygc = 'https://chat.whatsapp.com/GimZmhA2XTQFfPXk4XMrv6'
global.myweb = 'nh.co.id/fachri'
global.email = 'fahrisaeful718@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '© ᴹᴿ᭄FachriBot-Mdོ' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'FachriBot' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 15,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/d11e20d44501e1a59439b5344e07f5d7.jpg')
global.veloriy = fs.readFileSync('./image/chika.mp4')

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/b87f4a8f68fb59ce2c59e.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_Udh Kak._',
admin: '_Lu admin Kak?!_',
botAdmin: '_Jadi in admin dulu bot nya kak_',
owner: '_Fitur Khusus Dava tersayang_',
group: '_Fitur Hanya bisa di grup Kak!_',
private: '_Fitur Hanya bisa di pribadi chat Kak!_',
bot: '_Fitur Khusus Penguna Bot Ya Kak_',
wait: '_Loading..._',
error: '_Error kak, kalo ga mo error donasi ya kak!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
