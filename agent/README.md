# ipod-agent

Minimal Node.js agent scaffold.

Files:
- `package.json`: project manifest
- `index.js`: entry point
- `agent.js`: simple agent class with a recurring `task()`
- `.env.example`: example environment variables

Quick start:

1. Install dependencies (optional for dotenv):

```bash
npm install
npm install dotenv
# optionally install nodemon for development
npm install -D nodemon
```

2. Copy `.env.example` to `.env` and adjust values.

```bash
cp .env.example .env
```

3. Run the agent:

```bash
npm start
```

Customize `agent.js` to implement real tasks. Tell me what behavior you want and I can implement it.
