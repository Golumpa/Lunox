const { ActivityType } = require("discord.js");
const User = require("../../../settings/models/User.js");

module.exports.run = async (client) => {
    await client.poru.init(client, {
        shards: client.cluster.info.TOTAL_SHARDS,
        clientName: client.user.username,
        clientId: client.user.id,
    });

    const users = await User.find();

    for (let user of users) {
        client.premium.set(user.Id, user);
    }

    const status = [
        { type: ActivityType.Listening, name: `${client.user.username}\'s Mixtape!` },
        { type: ActivityType.Playing, name: "/help" },
        { type: ActivityType.Watching, name: `${client.guilds.cache.size} Servers` },
        { type: ActivityType.Competing, name: `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Users` },
    ];

    setInterval(() => {
        const index = Math.floor(Math.random() * status.length);

        client.user.setActivity(status[index].name, { type: status[index].type });
    }, 5000);

    console.log(`[INFO] ${client.user.username} is ready with ${client.guilds.cache.size} server`);
};
