const express = require('express');
const cors = require('cors');
const path = require('path');

require('./init_mongodb');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
