const myURI = 'postgres://nyusngrc:PHjCSzepsQdj0zzRBLPzCojvhYfJHuHU@heffalump.db.elephantsql.com/nyusngrc';

const URI = process.env.PG_URI || myURI;

const { Pool } = require ('pg');

const pool = new Pool({ connectionString: URI });

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};