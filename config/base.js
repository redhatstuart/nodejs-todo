var os = require("os");


module.exports = {
    hostdata: { hostname: os.hostname(), ostype: os.type(), osuptime: os.uptime(), oscpus: os.cpus(), osrelease: os.release(), dbconn: process.env.NODE_DB_Type },
    appInsightsKey: (process.env.APP_INSIGHTS_KEY || "VALUEOF-APPLICATION-INSIGHTS-NODEJSTODO-KEY")
};