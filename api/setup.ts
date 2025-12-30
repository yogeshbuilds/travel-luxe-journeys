import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool from './db.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    console.log("Setup: Starting...");
    try {
        console.log("Setup: Attempting to connect to pool...");
        const client = await pool.connect();
        console.log("Setup: Connected to pool successfully.");

        // ... (tables creation) ...

        console.log("Setup: Running queries...");

        // Travel Queries Table
        await client.query(`
      CREATE TABLE IF NOT EXISTS travel_queries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(50) NOT NULL,
        package_name VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

        // Luxury Ride Queries Table
        await client.query(`
      CREATE TABLE IF NOT EXISTS ride_queries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(50) NOT NULL,
        car VARCHAR(255) NOT NULL,
        pickup_location TEXT NOT NULL,
        occasion VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

        // Spa Queries Table
        await client.query(`
      CREATE TABLE IF NOT EXISTS spa_queries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(50) NOT NULL,
        preferred_package VARCHAR(100),
        preferred_location VARCHAR(100),
        message TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

        // Celebrity Meetup Queries Table
        await client.query(`
      CREATE TABLE IF NOT EXISTS meetup_queries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(50) NOT NULL,
        celebrity VARCHAR(255) NOT NULL,
        requirement VARCHAR(255),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

        console.log("Setup: Tables created.");
        client.release();
        return res.status(200).json({ message: 'Tables created successfully' });
    } catch (error: any) {
        console.error('Setup error details:', {
            message: error.message,
            stack: error.stack,
            code: error.code
        });
        // Send back a simpler error that won't break JSON parsing if possible, or just the message
        return res.status(500).json({
            error: 'Failed to create tables',
            details: error.message || String(error)
        });
    }
}
