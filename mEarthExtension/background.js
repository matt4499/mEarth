console.log("[mEarth] Successfully loaded extension!");
setInterval(function(){ 
    console.log("[mEarth] Attempting to send URL to Discord..");
    fetch(`http://localhost:4499/?url=${encodeURI(window.location)}`).then(result => {
            console.log("[mEarth] Sent URL with result: " + result);
        });
}, 5000);