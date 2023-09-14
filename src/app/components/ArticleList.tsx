'use client'

import { useState, useEffect } from 'react';

export function ArticleList({ articles, publications }: { articles: any, publications: string[] }) {
    
    // Set initial state
    const [selectedArticles, setSelectedArticles] = useState(articles);
    const [selectedPublications, setSelectedPublications] = useState<String[]>([]);

    // Set styles for selected elements
    const chipClasses = "rounded-md px-2 py-1 cursor-pointer bg-gray-100 text-black";
    const selectedClasses = "rounded-md px-2 py-1 cursor-pointer bg-primary-500 text-primary-700";

    // Filter articles
    useEffect(() => {
        if (selectedPublications.length === 0) return setSelectedArticles(articles);
        const filteredArticles = articles.filter((article: any) => {
            const articlePublications = [article.publication];
            const hasSelectedPublication = selectedPublications.findIndex((selectedPublication: any) => { return articlePublications.indexOf(selectedPublication) > -1 }) > -1;
            return hasSelectedPublication;
        });
        setSelectedArticles(filteredArticles);
    }, [selectedPublications]);

    return (
        <>
            {/* Filters */}
            <div id="sidebar" className="w-full top-8 md:h-0 md:max-w-[240px] md:sticky md:pr-8">
                <div className="flex flex-col gap-2 border-b border-white pb-2 mb-6">
                    <h1 className="text-2xl font-bold mb-2">Writing</h1>
                    <p>Articles and stories that I have written, and writing projects that I am working on.</p>
                </div>
                {/* Filters: Publications */}
                <div id="publications" className="mb-6">
                    <h2 className="text-lg font-bold mb-2">Publications</h2>
                    <div className="flex flex-row flex-wrap gap-2">
                        {publications.map((publication: string) => {
                            const isSelected = selectedPublications.indexOf(publication) > -1;
                            const onClick = () => {
                                if (isSelected) {
                                    setSelectedPublications(selectedPublications.filter((selectedPublication) => { return selectedPublication !== publication }));
                                } else {
                                    setSelectedPublications([...selectedPublications, publication]);
                                };
                            }

                            return (
                                <button key={publication} className={`category transition-all ${isSelected ? selectedClasses : chipClasses}`} onClick={onClick}>
                                    {publication}
                                </button>
                            )
                        })}
                    </div>
                </div>

            </div>

            {/* Articles */}
            <div id="articles-list" className="flex-1 pt-8 mt-4 border-t md:pl-8 md:mt-0 md:border-0 md:pt-0 max-w-[1200px]">
                {selectedArticles.map((article: any, index: number) => (
                    <div key={index} className={`pb-6 mb-8 ${index < (articles.length - 1) ? "border-b border-white" : ""}`}>
                        <h2 className="text-lg font-bold mb-2">{article.title}</h2>
                        <div className="flex flex-row flex-wrap gap-4 mb-3 items-center">
                            <div className="bg-gray-200 text-black rounded-md px-2 py-1 text-xs">{article.publication}</div>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-sm">View article</a>
                        </div>
                        <p className="text-sm">{article.excerpt}</p>
                    </div>
                ))}
            </div>
        </>

    )
}