const client = require('discord-rich-presence')('693351150715666532');
const express = require('express');
const app = express();
const startdate = Date.now()
app.get('/', function (req, res){
    res.sendStatus(200);
    console.log("[DEV] Recieved new request URL: " + req.query.url);
    console.log("[RTC] Attempting to change status..");
    const devurl = req.query.url;
    var IsStreetView = devurl.includes("data=");
    var SplitURL = devurl.substring(devurl.indexOf('@') + 1);
    var SplitURl2 = SplitURL.split(',');
    var X = SplitURl2[0];
    var Z = SplitURl2[1];
    client.updatePresence({
          state: `X: ${X} , Z: ${Z}, Street View: ${IsStreetView}`,
          details: 'Browsing the world...',
		  startTimestamp: startdate,
          largeImageKey: 'image',
    });
});
app.listen(4499);