

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["918334654816329750", ""], 
  mongodbUri : "mongodb+srv://SiangStudio:q5qcKchKi4Ft2phw@cluster0.gfw9a38.mongodb.net/?retryWrites=true&w=majority",
  spotifyClientId : "",
  spotifyClientSecret : "",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  activityName: "YouTube Music", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/KvEJs8zAMh",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "kritaokLavaLink",
      password: "kritaok",
      host: "https://lavalink-server-zlhu.onrender.com",
      port:  8080,
      secure: true
    }
  ]
}
