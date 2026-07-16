const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' })

// ==========================================
// 👑 [ إمبراطورية المالك فرعون لخدمات البوتات ] 👑
// ==========================================
// تطوير وإنشاء: المالك فرعون شخصياً
// الإشراف العام: حوكشه، شيماشيمو، والعنكبوت
// ==========================================

// 🛡️ [ قسم المالكين والمطورين الأساسيين ]
global.owner = [
  '201270884372', // 👑 المالك فرعون (رئيس الإمبراطورية)
  '201277430366'  // 🕸️ المطور المشرف العنكبوت
] 

// ⚙️ [ قواعد البيانات والسيرفر ]
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.uiswxsv.mongodb.net/?retryWrites=true&w=majority"
global.port = process.env.PORT || 5000
global.email = 'pharaoh.owner@bot.com'
global.github = 'https://github.com/marwannaesr54-cmd/GOJO_MD'
global.location = 'Cairo, Egypt'
global.instagram = 'https://instagram.com/'

// 🔐 [ رتب الصلاحيات والأمان المستويات العالية ]
global.sudo = process.env.SUDO || '201270884372,201277430366' // صلاحيات المطورين الكاملة
global.devs = '201270884372' // المطور الرئيسي (فرعون)
global.mods = [
  '201277430366' // المشرف العنكبوت
] 
global.premium = [
  '201270884372' // رقم فرعون المميز
]

// 🎨 [ مظهر وملصقات البوت الفخمة ]
global.packname = "👑 بوت المالك فرعون 👑" 
global.author = "🛡️ فرعون & العنكبوت 🕸️" 
global.watermark = "🤖 تم التطوير بواسطة إمبراطورية فرعون"
global.image = 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.jpg'
global.sessionName = "session"
global.env = "prod"

// ⚡ [ الإعدادات التشغيلية الذكية ]
global.botname = "⚡ GOJO BOT - PHARAOH EDITION ⚡" 
global.ownertitle = "👑 المالك فرعون 👑" 
global.auto_read_status = process.env.AUTO_READ_STATUS || "true" // قراءة الحالات تلقائياً ومجاناً
global.auto_status_saver = process.env.AUTO_STATUS_SAVER || "false" // حفظ الحالات تلقائياً
global.read_message = process.env.READ_MESSAGE || "false" // جعل البوت يقرأ الرسائل تلقائياً
global.antilik = process.env.ANTILINK || "true" // طرد أي عضو يرسل روابط جروبات أخرى فوراً

// ==========================================
// 💬 [ قسم رسائل الردود التلقائية والزخرفة ]
// ==========================================
global.mess = {
    success: '✅ تم تنفيذ طلبك بنجاح يا فنان!',
    admin: '🚫 عذراً.. هذا الأمر خاص بـ مشرفين الجروب فقط!',
    botAdmin: '❌ يجب ترقية البوت مشرفاً (Admin) أولاً لتنفيذ هذا الأمر!',
    owner: '👑 عذراً.. هذا الأمر خاص بـ المالك فرعون فقط!',
    group: '👥 هذا الأمر يعمل داخل المجموعات فقط!',
    private: '🔒 هذا الأمر يعمل في المحادثات الخاصة فقط!',
    bot: '🤖 هذه الميزة خاصة بالبوت فقط!',
    wait: '⏳ انتظر ثانية واحدة.. يتم الآن معالجة طلبك الفخم...'
}

// ==========================================
// 🤖 [ نظام الإشراف التلقائي الذكي ]
// ==========================================
global.block_bad_words = true // منع الألفاظ الخارجة في الجروبات
global.bad_words = ['شتيمة1', 'شتيمة2'] // يمكنك إضافة أي كلمات تريد منعها هنا

// ==========================================
// 🔄 [ نظام التحديث التلقائي للملف ]
// ==========================================
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(`✨ [إمبراطورية فرعون] تم تحديث ملف الإعدادات بنجاح: '${__filename}' ✨`)
    delete require.cache[file]
    require(file)
})
