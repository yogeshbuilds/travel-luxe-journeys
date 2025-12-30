import { Pool } from 'pg';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
        ? process.env.DATABASE_URL
        : `postgres://${process.env.PGUSER}:${process.env.PGPASSWORD}@${process.env.PGHOST}:5432/${process.env.PGDATABASE}?sslmode=require`,
    ssl: {
        rejectUnauthorized: false,
    },
});

export default pool;
