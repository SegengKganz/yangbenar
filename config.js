
// - Ubah nomor owner dan wm di sini.
// + Daftar apikey terlebih dahulu sebelum menggunakan svript ini link
  // https://api.botcahx.live
//https://api.betabotz.me
// - Jika sudah mendaftar salin key yang ada di profie dan paste di global.btc
// - Contoh global.btc = 'xzRhejka'
// global.lann = 'trial'
// - Jika sudah maka lanjutkan untuk mengubah nomor owner dan wm.

global.owner = ['6283846677065']  
global.mods = ['6283846677065'] 
global.prems = ['6283846677065']
global.nameowner = 'owner'
global.numberowner = '6283846677065' 
global.mail = 'segengelek@gmail.com' 
global.dana = '6283846677065'
global.pulsa = '6283846677065'
global.gopay = '-'
global.namebot = '𝔊𝔢𝔫𝔤-𝔅𝔬𝔱𝔷𝔷 X MD'
global.gc = 'https://chat.whatsapp.com/CO4USbDLEte2GzCN2GH7aJ'
global.web = 'https://github.com/SegengKganz.github.io/GengStorewebsite'
global.instagram = 'https://instagram.com/geng_store12'
global.wm = '© 𝔊𝔢𝔫𝔤 𝔅𝔬𝔱𝔷𝔷'
global.watermark = wm
global.wm2 = '⫹⫺ 𝔊𝔢𝔫𝔤 𝔅𝔬𝔱𝔷𝔷'
global.wm3 = '© 𝔊𝔢𝔫𝔤 𝔅𝔬𝔱𝔷𝔷'
global.wm4 = '© 𝔊𝔢𝔫𝔤 𝔅𝔬𝔱𝔷𝔷 By 𝕲𝖊𝖓𝖌 𝕾𝖙𝖔𝖗𝖊'
global.wait = '_*Tunggu Tod sedang di proses...*_'
global.eror = '_*Server Error*_'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '*⫹⫺ Stiker sedang dibuat...*'
global.packname = 'Made with'
global.author = '𝕲𝖊𝖓𝖌 𝕾𝖙𝖔𝖗𝖊'
global.alpiskey = '6e426632' //daftar sendiri jika key habis https://alpis.eu.org

global.btc = 'nv2BhzvE' //Daftar terlebih dahulu https://api.botcahx.live
global.lann = 'UEGidY88' //Note Key Ini Hanya Bertahan Selama 4 Day Sejak Config.js update! lebih baik register di https://api.betabotz.me
global.APIs = { 
  tio: 'https://api.botcahx.live',
  alpis: 'https://alpis.eu.org'
}
global.APIKeys = { 
  'https://api.botcahx.live': 'nv2BhzvE' //isi apikey mu https://api.botcahx.live
}

global.multiplier = 45
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
