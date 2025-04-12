"use client"
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import PageWrapper from '../../Components/FramerMotion';

export default function Project() {
    const params = useParams();
    const project = params?.project;
    const [htmlContent, setHtmlContent] = useState("");
    const [warning, setWarning] = useState(null);

    useEffect(() => {
        const fetchHtmlContent = async () => {
            if (!project) return;

            try {
                const response = await fetch(`/api/getHtmlContent?route=${project}`);
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
    }, [project]);

    return (
        <PageWrapper>
            <section className="flex flex-col gap-14 py-10 w-4/5 mx-auto mt-16">
                {warning ? (
                    <p className="text-red-600 font-bold text-lg p-4 border border-red-300 bg-red-100 rounded">
                        {warning}
                    </p>
                ) : (
                    <div
                        className="container"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                )}
            </section>
        </PageWrapper>
    );
}
