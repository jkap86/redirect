const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;



app.get('*', (req, res) => {
    res.redirect(301, `https://sleepier-okarq.ondigitalocean.app${req.originalUrl}`);
});

app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
