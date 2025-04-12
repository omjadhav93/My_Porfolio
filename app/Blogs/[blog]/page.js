"use client"
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import PageWrapper from '../../Components/FramerMotion';

export default function Blog() {
    const params = useParams();
    const blog = params?.blog;
    const [htmlContent, setHtmlContent] = useState("");
    const [warning, setWarning] = useState(null);

    useEffect(() => {
        const fetchHtmlContent = async () => {
            if (!blog) return;

            try {
                const response = await fetch(`/api/getHtmlContent?route=Blogs/${blog}`);
                if (response.ok) {
                    const contentType = response.headers.get("content-type");
                    if (contentType && contentType.includes("text/html")) {
                        const data = await response.text();
                        setHtmlContent(data);
                    } else {
                        const errorData = await response.json();
                        setWarning(errorData.error);
                    }
                } else {
                    const errorData = await response.json();
                    setWarning(errorData.error || "Failed to fetch content.");
                }
            } catch (error) {
                setWarning("Failed to connect to the server.");
            }
        };

        fetchHtmlContent();
    }, [blog]);

    return (
        <PageWrapper>
            <section className='flex flex-row w-full'>
                <div className="min-w-[20%] min-h-screen mr-1 border-r-2 border-white"></div>
                {warning ? (
                    <p className="h-max mt-10 mx-auto text-red-600 font-bold text-lg p-4 border border-red-300 bg-red-100 rounded">
                        {warning}
                    </p>
                ) : (
                    <div
                        className="container py-10 px-2"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                )}
            </section>
        </PageWrapper>
    );
}
