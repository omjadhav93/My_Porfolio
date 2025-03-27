import fs from 'fs';
import path from 'path';
import * as cheerio from 'cheerio';

export async function GET(req) {
    try {
        const folderPath = 'HTMLContent/Blogs';

        // Read all files in the folder using Promise
        const files = await new Promise((resolve, reject) => {
            fs.readdir(folderPath, (err, files) => {
                if (err) reject(err);
                else resolve(files);
            });
        });

        // Read all files concurrently using Promise.all
        const fileData = await Promise.all(
            files.map(file => {
                const filePath = path.join(folderPath, file);
                return new Promise((resolve, reject) => {
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) reject(err);

                        const $ = cheerio.load(data);

                        // Extract details
                        const Name = path.basename(file, path.extname(file));
                        const Title = $('title').text() || '';
                        const Highlighted = Boolean($('meta[name="highlighted"]').attr('content')) || false;
                        const Description = $('meta[name="description"]').attr('content') || '';
                        const Tags = $('meta[name="tags"]').attr('content') 
                            ? $('meta[name="tags"]').attr('content').split(',').map(tag => tag.trim()) 
                            : [];
                        const Image = $('body img').first().attr('src') || '/DefaultBlog.png';

                        // Return structured data
                        resolve({ Name, Title, Highlighted, Description, Tags, Image });
                    });
                });
            })
        );

        return new Response(JSON.stringify(fileData), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
