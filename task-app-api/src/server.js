import app from './config/app.js';
import config from './config/config.js';

app.listen(config.port, () => console.log(`server started at ${config.port}`));
