const myURI = '';

const URI = process.env.PG_URI || myURI;

const { Pool } = require ('pg');

const pool = new Pool({ connectionString: URI });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};