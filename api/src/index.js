import app from './app';
import yenv from 'yenv'

const env = yenv() // defaults to the env.yaml file unless otherwise specified

// reads the `API_PORT` value from the env file
// renames it to `PORT` and defaults it to 8080 if not specified
const { API_PORT: PORT = 8080 } = env;

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
