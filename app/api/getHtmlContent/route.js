import fs from 'fs';
import path from 'path';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const project = searchParams.get('project');

    if (!project) {
        return new Response(JSON.stringify({ error: "Project name is required." }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        // Move HTML files to the 'content' folder
        const filePath = path.join(process.cwd(), `content/${project}.html`);

        if (!fs.existsSync(filePath)) {
            throw new Error('File not found');
        }

        const htmlContent = fs.readFileSync(filePath, 'utf-8');

        return new Response(htmlContent, {
            status: 200,
            headers: { 'Content-Type': 'text/html' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Invalid project name or file not found.' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
