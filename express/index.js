// express-app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/json', (req, res) => {
  res.json({ message: 'Express JSON Response' });
});
app.get('/xml', (req, res) => {
  res.set('Content-Type', 'application/xml');
  res.send(`<xml><message>Hello, World!</message></xml>`);
});

app.post('/supabase', async (req, res) => {
  // 在这里执行 Supabase 查询
  // 例如，使用 supabase.query.select() 等方法
  res.send('Supabase Query Result');
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
