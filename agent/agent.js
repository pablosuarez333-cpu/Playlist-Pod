class Agent {
  constructor() {
    this.intervalMs = parseInt(process.env.AGENT_INTERVAL_MS || '5000', 10);
    this.counter = 0;
    this._timer = null;
  }

  async task() {
    this.counter++;
    // Placeholder for real work - replace with actual tasks
    console.log(new Date().toISOString(), `Agent task #${this.counter}: heartbeat`);
  }

  start() {
    console.log('Starting agent — interval:', this.intervalMs, 'ms');
    this._timer = setInterval(() => {
      this.task().catch(err => console.error('Agent task error:', err));
    }, this.intervalMs);
  }

  stop() {
    if (this._timer) clearInterval(this._timer);
    console.log('Agent stopped');
  }
}

module.exports = Agent;
