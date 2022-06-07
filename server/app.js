const express = require('express');
const { getData } = require('./repository')
const cors = require('cors')

const PORT = 8080;
const app = express();
app.use(cors())

app.get('/api/personnel', (req, res) => {
  try {
    const data = getData()
    res.status(200).json(data)
  }
  catch(e) {
    res.status(400).json({'message': 'Error getting or returning personnel data'})
  }
})

app.listen(PORT, () => console.log(`App running at http://localhost on port ${PORT}`));
