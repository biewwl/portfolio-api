// src/server.js
const app = require('./app');
require('dotenv').config();

const skills = require('./routes/skills');
const login = require('./routes/login');

const PORT = Number(process.env.BACKEND_PORT);

app.use(skills);
app.use(login);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
