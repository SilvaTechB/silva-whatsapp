//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
    if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
    global.db.data.chats[m.chat].isBanned = false
    m.reply('✅Tʜᴇ ʙᴏᴛ ʜᴀs ʙᴇᴇɴ ᴀᴄᴛɪᴠᴀᴛᴇᴅ ғᴏʀ ᴛʜɪs ᴄʜᴀᴛ𒁂')

    // Save the updated database
    if (global.db && typeof global.db.save === 'function') {
        await global.db.save()
    }
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = ['boton', 'unbanchat']

export default handler
