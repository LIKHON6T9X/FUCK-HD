module.exports = {
  config: {
    name: "inbox",
    aliases: ["in"],
    version: "1.0",
    author: "MOHAMMAD BADOL",
    countDown: 10,
    role: 0,
    shortDescription: {
      en: "okh enjoy cmd"
    },
    longDescription: {
      en: ""
    },
    category: "fun",
    guide: {
      en: ""
    }
  },
  langs: {
    en: {
      gg: ""
    },
    id: {
      gg: ""
    }
  },
  onStart: async function({ api, event, args, message }) {
    try {
      const query = encodeURIComponent(args.join(' '));
      message.reply("✅ SUCCESSFULLY SEND MSG\n\n🔰 PLEASE CK YOUR INBOX OR MSG REQUEST BOX", event.threadID);
      api.sendMessage("✅ SUCCESSFULLY ALLOW\n🔰 NOW YOU CAN USE🫠 HI I'M <-LIKHON-> BOT🫠 HERE", event.senderID);
    } catch (error) {
      console.error("Error bro: " + error);
    }
  }
}
