require("dotenv").config();

module.exports = {
    // BOT DETAILS
    token: process.env.TOKEN || " ", // your bot token
    prefix: process.env.PREFIX || "!", // your bot prefix "for owner message command"
    color: process.env.EMBED_COLOR || " ", // your embeded hex color
    owner: process.env.OWNER_ID || " ", // your bot Owners ID
    guildLogs: process.env.GUILD_LOGS || " ", // your server join left logs Channel ID
    leaveTimeout: process.env.LEAVE_TIMEOUT || "60000", // set leave TimeOut when bot was alone 1000 = 1sec

    // PORU DETAILS
    playSource: process.env.PLAY_SOURCE || "ytmsearch", // recomended using "ytmsearch". You can change this to: "ytsearch" / "scsearch" / "spotify".
    poruOptions: {
        defaultPlatform: process.env.DEFAULT_SOURCE || "ytmsearch", // recomended using "ytmsearch". You can change this to: "ytsearch" / "scsearch" / "spsearch (need Lavasrc plugin)".
        clientID: process.env.SPOTIFY_ID || " ", // your Spotify Client ID
        clientSecret: process.env.SPOTIFY_SECRET || " ", // your Spotify Client Secret
        reconnectTries: 5, // total attemps to try if reconnect failed. you can change it to "Infinity" for unlimited attemps.
        playlistLimit: 2, // 1 = 100 tracks
        albumLimit: 2, // 1 = 50 tracks
        artistLimit: 2, // 1 = 50 tracks
        searchMarket: "us",
    },
    defaultVolume: process.env.DEFAULT_VOLUME || "50", // the default volume that the bot will join with.
    nodes: [
        {
            name: process.env.NODE_NAME || "Lunox", // lavalink node name (anything you want)
            host: process.env.NODE_HOST || "localhost", // lavalink host
            port: parseInt(process.env.NODE_PORT || "2333"), //lavalink port
            password: process.env.NODE_PASSWORD || "youshallnotpass", //lavalink pass/auth
            secure: parseBoolean(process.env.NODE_SECURE || "false"), //lavalink secure "true/false"
        },
    ],

    // LINK DETAILS
    mongoUri: process.env.MONGO_URI || " ", // your MongoDB Url
    supportUrl: process.env.SUPPORT_URL || "", // your Support Server Link
    inviteUrl: process.env.INVITE_URL || " ", // your Bot Invite Link
    voteUrl: process.env.VOTE_URL || " ", // your Bot Vote Link [DONT FORGET TO VOTE MY BOT :)]
    imageUrl: process.env.IMAGE_URL || " ", // your Bot Banner Imange Link to use on "help" & "about" command
};

function parseBoolean(value) {
    if (typeof value === "string") {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
