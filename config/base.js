var os = require("os");


module.exports = {
    hostdata: { hostname: os.hostname(), ostype: os.type(), osuptime: process.uptime(), oscpus: os.cpus(), osrelease: os.release(), dbconn: process.env.NODE_DB_Type },
    appInsightsKey: (process.env.APP_INSIGHTS_KEY || "8464e295-40eb-4eb4-b889-878f4572e081")
};