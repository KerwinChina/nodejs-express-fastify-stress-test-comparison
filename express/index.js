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
  // ������ִ�� Supabase ��ѯ
  // ���磬ʹ�� supabase.query.select() �ȷ���
  res.send('Supabase Query Result');
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
