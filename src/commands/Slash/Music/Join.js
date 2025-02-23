const { EmbedBuilder } = require("discord.js");
const { defaultVolume } = require("../../../settings/config.js");

module.exports = {
    name: "join",
    description: "Invite bot to your voice channel.",
    category: "Music",
    permissions: {
        bot: ["Speak", "Connect"],
        channel: ["Speak", "Connect"],
        user: [],
    },
    settings: {
        inVc: true,
        sameVc: false,
        player: false,
        current: false,
        owner: false,
        premium: false,
    },
    run: async (client, interaction) => {
        await interaction.deferReply({ ephemeral: false });

        let player = client.poru.players.get(interaction.guild.id);

        if (player) {
            const embed = new EmbedBuilder()
                .setColor(client.color)
                .setDescription(`\`❌\` | I already joined a voice channel.`)
                .setTimestamp();

            return interaction.editReply({ embeds: [embed] });
        }

        if (!player) {
            player = await client.poru.createConnection({
                guildId: interaction.guild.id,
                voiceChannel: interaction.member.voice.channel.id,
                textChannel: interaction.channel.id,
                deaf: true,
            });

            await player.setVolume(parseInt(defaultVolume));
            await player.connect();

            const embed = new EmbedBuilder()
                .setColor(client.color)
                .setDescription(`\`☑️\` | Joined to ${interaction.member.voice.channel.toString()}`);

            return interaction.editReply({ embeds: [embed] });
        }
    },
};
