const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const https = require('https');

setInterval(() => {
    console.log(`Pinging server at ${new Date()}`)
    https.get('https://sleepier.herokuapp.com/')
}, 25 * 60 * 1000);

app.get('*', (req, res) => {
    res.redirect(301, `https://sleepier-jknpd.ondigitalocean.app${req.originalUrl}`);
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
