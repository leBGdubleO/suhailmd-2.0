const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";

7
global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_09_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzMCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTExLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg0LFxuICAgICAgICA2MixcbiAgICAgICAgMTU3LFxuICAgICAgICA4MixcbiAgICAgICAgNzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDksXG4gICAgICAgIDExLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTksXG4gICAgICAgIDUzLFxuICAgICAgICAxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQxLFxuICAgICAgICAyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDczLFxuICAgICAgICAyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDMsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA5NCxcbiAgICAgICAgNTksXG4gICAgICAgIDY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICA2MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgODUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJwRHdDQnNPM0pYUjRUampDZ2JCcm1ZejhDSEx5eCttN0lGMjhtbEF2aG9ZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJvbzczRVZBa1FrT19TSzJjbVNzNlNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImJjMTM3MWVjLWRiYjQtNDQxNy04NDQ4LWFkZDY2NGIzNDNhMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAyMzEsXG4gICAgICA0NCxcbiAgICAgIDE3LFxuICAgICAgNjQsXG4gICAgICAyMDAsXG4gICAgICAxMTcsXG4gICAgICAxNzgsXG4gICAgICAyMjMsXG4gICAgICAyMjgsXG4gICAgICAxNTgsXG4gICAgICAxMjAsXG4gICAgICAxNDcsXG4gICAgICAzMSxcbiAgICAgIDE4OSxcbiAgICAgIDksXG4gICAgICAxMCxcbiAgICAgIDIzLFxuICAgICAgMzcsXG4gICAgICAxN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzYsXG4gICAgICAyNyxcbiAgICAgIDE0OSxcbiAgICAgIDczLFxuICAgICAgMTE4LFxuICAgICAgMzksXG4gICAgICAxMTMsXG4gICAgICAxODcsXG4gICAgICAyMDIsXG4gICAgICAyNDMsXG4gICAgICAyMzUsXG4gICAgICA3OSxcbiAgICAgIDQ4LFxuICAgICAgNjIsXG4gICAgICAyOCxcbiAgICAgIDM3LFxuICAgICAgMjQ2LFxuICAgICAgMTk5LFxuICAgICAgMTE1LFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBESkRHUEM2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI1MDk0MzUwNDQ2Mzo0NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1SIEFTU0FTU0lOIPCWo5gg8J2Qt/Cdm6/wnZul8J2Rh/Cdm6jwkoiS8JOEv82ezZ/Nns2f4LySXCIsXG4gICAgXCJsaWRcIjogXCIxMjQ1NTg4NjY2NzM4OTg6NDVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWJGck9zSEVMZXR0YmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDZjc3amU5QnpWdjlxL094c3dRdnNYaWZkREtZWDJPSXRqNHFvRWJJMkhjPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIldZSnVLR3FZV2J2dkJGL3lLbmozMGE1TjhjWmIyODRuTDZ5dlNaLzdFckpINjFBd1NxcVp1bW9SY3N0QnF6WHBLOWxnOXpEYVVFT1hoOEFyWDhpRkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk01OXFKZUVSY1FHNkN4ais2RWZCNklrVnp5dE56dkhMQkdSN2pxYnNaSGdxOWc1S2w5NEFXTXpaclovTTl1TE5IS0xXdHNJb1ZveVpNdDVRZzhBWWdBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTQzNTA0NDYzOjQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzEwMjQ1NzBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
