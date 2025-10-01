const express = require('express');
const app = express();
const port = 8080;

app.get('/get-price', (req, res) => {
  const hasError = Math.random() < 0.9; 
  const totalPrice = hasError ? "0.00" : (Math.random() * 100).toFixed(2);

  res.json({
    totalPrice: totalPrice,
    hasError: hasError
  });
});

app.listen(port, () => {
  console.log(`Service running at http://localhost:${port}`);
});
