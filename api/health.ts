import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.status(200).json({
        status: 'ok',
        env_check: {
            has_host: !!process.env.PGHOST,
            has_user: !!process.env.PGUSER,
            has_pass: !!process.env.PGPASSWORD,
            has_db: !!process.env.PGDATABASE
        }
    });
}
