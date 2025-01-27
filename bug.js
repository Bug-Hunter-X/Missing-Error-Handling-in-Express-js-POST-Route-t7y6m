const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling if user is not provided
  console.log(user); 
  res.status(201).json({ message: 'User created' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));