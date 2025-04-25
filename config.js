

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
      name: "DSC.gg",
      password: "https://dsc.gg/ajidevserver",
      host: "lava-v3.ajieblogs.eu.org",
      port:  443,
      secure: true
    }
  ]
}
