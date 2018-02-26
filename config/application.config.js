require('dotenv').config();
import convict from 'convict'

let config = convict({
    port: {
        doc: "The Application Port",
        format: "port",
        default: 3000,
        env: "NODE_PORT"
    }
});

config.validate({ allowed: "strict" });

export default config;