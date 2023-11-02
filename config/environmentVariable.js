require("dotenv").config();

const ENV_VAR = {
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
};

module.exports = ENV_VAR;
