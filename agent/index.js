require('dotenv').config();
const Agent = require('./agent');

const agent = new Agent();
agent.start();

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('SIGINT received — stopping agent');
  agent.stop();
  process.exit(0);
});
