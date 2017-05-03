var os = require("os");


module.exports = {
    hostdata: { hostname: (process.env.HOSTNAME || os.hostname()) },
    appInsightsKey: (process.env.APP_INSIGHTS_KEY || "YOUR_APP_INS_KEY_HERE")
};