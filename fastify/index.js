// fastify-app.js
const fastify = require('fastify')();
const port = 3000;
// Supabase
//const supabase = require('supabase');

//const supabaseUrl = 'https://your-supabase-url.com';
//const supabaseKey = 'your-supabase-key';

//const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);


fastify.get('/', async (request, reply) => {
  return 'Hello, Fastify!';
});

fastify.get('/json', async (request, reply) => {
  return { message: 'Fastify JSON Response' };
});


fastify.get('/xml', (request, reply) => {
  reply.header('Content-Type', 'application/xml');
  reply.send(`<xml><message>Hello, World!</message></xml>`);
});
fastify.listen(port,'0.0.0.0', (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Fastify app listening at ${address}`);
});
