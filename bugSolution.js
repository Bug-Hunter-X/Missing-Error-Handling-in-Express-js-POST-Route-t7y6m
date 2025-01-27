const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  if (!req.body || !req.body.name || !req.body.email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const user = req.body;
  console.log(user);
  res.status(201).json({ message: 'User created', user });
});
app.listen(3000, () => console.log('Server listening on port 3000'));