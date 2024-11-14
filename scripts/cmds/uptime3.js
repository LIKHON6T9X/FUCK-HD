module.exports = {
  config: {
    name: "uptime3",
    aliases: ["upt"],
    role: 0,
    shortDescription: {
      en: "Show server uptime",
      tl: "Ipakita ang uptime ng server",
    },
    longDescription: {
      en: "Shows the duration for which the server has been running",
      tl: "Ipapakita ang tagal na gumagana ang server",
    },
    category: "goatBot",
    guide: {
      en: "{p}uptime",
      tl: "{p}uptime",
    },
  },

  onStart: async function({ api, message, threadsData }) {
    const os = require("os");
    const uptime = os.uptime();

    const days = Math.floor(uptime / (3600 * 24));
    const hours = Math.floor((uptime % (3600 * 24)) / 3600);
    const mins = Math.floor((uptime % 3600) / 60);
    const seconds = Math.floor(uptime % 60);

    const system = `OS: ${os.platform()} ${os.release()}`;
    const cores = `Cores: ${os.cpus().length}`;
    const arch = `Architecture: ${os.arch()}`;
    const totalMemory = `Total Memory: ${Math.round(os.totalmem() / (1024 * 1024 * 1024))} GB`;
    const freeMemory = `Free Memory: ${Math.round(os.freemem() / (1024 * 1024 * 1024))} GB`;
    const uptimeString = `${days}d:${hours}h:${mins}m:${seconds}s`;

    const response = ` ${uptimeString}`;

    message.reply(response);
  },
};
