const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/car_value', (req, res) => {
  const { model, year } = req.body;

  if (!model || !year) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  const letters = model.toLowerCase().match(/[a-z]/g);
  const positions = letters.map((letter) => letter.charCodeAt(0) - 96);
  const car_value = positions.reduce((acc, val) => acc + val, 0) * 100 + parseInt(year);

  return res.json({ car_value });
});

app.get('/error', (req, res) => {
  return res.status(400).json({ error: 'There is an error' });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
