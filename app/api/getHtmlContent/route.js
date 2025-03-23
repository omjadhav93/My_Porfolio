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
        // Build the full URL using the request host
        const host = req.headers.get('host');
        const protocol = req.headers.get('x-forwarded-proto') || 'http'; // Handles https in production
        const htmlUrl = `${protocol}://${host}/HtmlContent/${project}.html`;

        const htmlContent = await fetch(htmlUrl);
        if (!htmlContent.ok) throw new Error('File not found');

        const content = await htmlContent.text();

        return new Response(content, {
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