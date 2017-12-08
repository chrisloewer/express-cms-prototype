const express = require('express');
const app = express();

app.use(express.static('./dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join('./dist/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
