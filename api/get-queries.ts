import type { VercelRequest, VercelResponse } from '@vercel/node';
import pool from './db';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { type, page = '1', limit = '10' } = req.query;

    if (!type) {
        return res.status(400).json({ error: 'Missing type parameter' });
    }

    const tableMap: Record<string, string> = {
        travel: 'travel_queries',
        ride: 'ride_queries',
        spa: 'spa_queries',
        meetup: 'meetup_queries',
    };

    const tableName = tableMap[type as string];
    if (!tableName) {
        return res.status(400).json({ error: 'Invalid type parameter' });
    }

    try {
        const client = await pool.connect();

        const pageNum = parseInt(page as string, 10);
        const limitNum = parseInt(limit as string, 10);
        const offset = (pageNum - 1) * limitNum;

        const dataQuery = `
      SELECT * FROM ${tableName}
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;

        const countQuery = `SELECT COUNT(*) FROM ${tableName}`;

        const [dataResult, countResult] = await Promise.all([
            client.query(dataQuery, [limitNum, offset]),
            client.query(countQuery),
        ]);

        client.release();

        const total = parseInt(countResult.rows[0].count, 10);
        const totalPages = Math.ceil(total / limitNum);

        return res.status(200).json({
            data: dataResult.rows,
            pagination: {
                total,
                page: pageNum,
                limit: limitNum,
                totalPages
            }
        });

    } catch (error) {
        console.error('Database error:', error);
        return res.status(500).json({ error: 'Internal Server Error', details: String(error) });
    }
}
