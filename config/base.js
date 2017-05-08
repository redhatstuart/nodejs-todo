var os = require("os");


module.exports = {
    hostdata: { hostname: (process.env.HOSTNAME || os.hostname()) },
    appInsightsKey: (process.env.APP_INSIGHTS_KEY || "VALUEOF-APPLICATION-INSIGHTS-NODEJSTODO-KEY")
};