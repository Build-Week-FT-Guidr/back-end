const server = require('./server');

const PORT = process.env.PORT || 5656;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
