import { Pool } from 'pg';

const pool = new Pool({
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: false, // Often needed for hosted Postgres like Neon/Vercel
    },
});

export default pool;
