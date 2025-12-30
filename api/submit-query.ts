import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool from './db.js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { type, data } = req.body;

    if (!type || !data) {
        return res.status(400).json({ error: 'Missing type or data' });
    }

    try {
        const client = await pool.connect();
        let queryText = '';
        let values: any[] = [];

        switch (type) {
            case 'travel':
                queryText = 'INSERT INTO travel_queries (name, mobile, package_name) VALUES ($1, $2, $3) RETURNING id';
                values = [data.name, data.mobile, data.package_name || null];
                break;

            case 'ride':
                queryText = 'INSERT INTO ride_queries (name, mobile, car, pickup_location, occasion, message) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
                values = [data.name, data.mobile, data.car, data.pickup_location, data.occasion || null, data.message || null];
                break;

            case 'spa':
                queryText = 'INSERT INTO spa_queries (name, mobile, preferred_package, preferred_location, message) VALUES ($1, $2, $3, $4, $5) RETURNING id';
                values = [data.name, data.mobile, data.preferred_package, data.preferred_location, data.message || null];
                break;

            case 'meetup':
                queryText = 'INSERT INTO meetup_queries (name, mobile, celebrity, requirement) VALUES ($1, $2, $3, $4) RETURNING id';
                values = [data.name, data.mobile, data.celebrity, data.requirement || null];
                break;

            default:
                client.release();
                return res.status(400).json({ error: 'Invalid form type' });
        }

        const result = await client.query(queryText, values);
        client.release();

        return res.status(200).json({ success: true, id: result.rows[0].id });

    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: String(error) });
    }
}
