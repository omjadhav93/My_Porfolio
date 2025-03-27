import fs from 'fs';
import path from 'path';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const route = searchParams.get('route');

    if (!route) {
        return new Response(JSON.stringify({ error: "Route name is required." }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        // Move HTML files to the 'content' folder
        console.log(route)
        const filePath = path.join(process.cwd(), `HTMLContent/${route}.html`);

        if (!fs.existsSync(filePath)) {
            throw new Error('File not found');
        }

        const htmlContent = fs.readFileSync(filePath, 'utf-8');

        return new Response(htmlContent, {
            status: 200,
            headers: { 'Content-Type': 'text/html' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid route name or file not found.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
