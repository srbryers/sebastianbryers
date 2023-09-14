'use client'

import React, { Suspense } from 'react';

export function ProjectList({ projects, categories, tags }: { projects: any, categories: any, tags: any }) {

    // Set initial state
    const [selectedCategories, setSelectedCategories] = React.useState<String[]>([]);
    const [selectedTags, setSelectedTags] = React.useState<String[]>([]);
    const [selectedProjects, setSelectedProjects] = React.useState([]);

    // Set styles for selected elements
    const chipClasses = "rounded-md px-2 py-1 cursor-pointer bg-gray-100 text-black";
    const selectedClasses = "rounded-md px-2 py-1 cursor-pointer bg-primary-500 text-primary-700";

    // Filter projects
    React.useEffect(() => {
        if (selectedCategories.length === 0 && selectedTags.length === 0) return setSelectedProjects(projects);
        const filteredProjects = projects.filter((project: any) => {
            const projectCategories = project.categories;
            const projectTags = project.tags;
            const hasSelectedCategory = projectCategories.some((category: any) => { return selectedCategories.indexOf(category) > -1 });
            const hasSelectedTag = projectTags.some((tag: any) => { return selectedTags.indexOf(tag) > -1 });
            return hasSelectedCategory || hasSelectedTag;
        });
        setSelectedProjects(filteredProjects);
    }, [selectedCategories, selectedTags]);

    return (
        <>  
            {/* Filters */}
            <div id="sidebar" className="w-full top-8 md:h-0 md:max-w-[240px] md:sticky md:pr-8">
                <div className="flex flex-col gap-2 border-b border-white pb-2 mb-6">
                    <h1 className="text-2xl font-bold mb-2">Projects</h1>
                    <p>Projects that I’ve personally worked on/developed. Credit given to partners where applicable.</p>
                </div>
                {/* Filters: Categories */}
                <div id="categories" className="mb-6">
                    <h2 className="text-lg font-bold mb-2">Categories</h2>
                    <div className="flex flex-row flex-wrap gap-2">
                        {categories.map((category: any) => {
                            const isSelected = selectedCategories.indexOf(category) > -1;
                            const onClick = () => {
                                if (isSelected) {
                                    setSelectedCategories(selectedCategories.filter((selectedCategory) => { return selectedCategory !== category }));
                                } else {
                                    setSelectedCategories([...selectedCategories, category]);
                                };
                            }

                            return (
                                <button key={category} className={`category transition-all ${isSelected ? selectedClasses : chipClasses}`} onClick={onClick}>
                                    {category}
                                </button>
                            )
                        })}
                    </div>
                </div>
                {/* Filters: Tags */}
                <div id="tags" className="mb-6">
                    <h2 className="text-lg font-bold mb-2">Technologies</h2>
                    <div className="flex flex-row flex-wrap gap-2">
                        {tags.map((tag: any) => {
                            const isSelected = selectedTags.indexOf(tag) > -1;
                            const onClick = () => {
                                if (isSelected) {
                                    setSelectedTags(selectedTags.filter((selectedTag) => { return selectedTag !== tag }));
                                } else {
                                    setSelectedTags([...selectedTags, tag]);
                                };
                            }

                            return (
                                <button key={tag} className={`tag transition-all ${isSelected ? selectedClasses : chipClasses}`} onClick={onClick}>
                                    {tag}
                                </button>
                            )
                        })}
                    </div>
                </div>
            </div>
            
            {/* Projects List */}
            <div id="projects-list" className="flex-1 pt-8 mt-4 border-t md:pl-8 md:mt-0 md:border-0 md:pt-0 max-w-[1200px]">
                <Suspense fallback={<div>Loading...</div>}>
                    {selectedProjects.map((project: any, index: number) => {
                        
                        const projectFeatureImage = project.featureImage ? project.featureImage.fields.file.url : "";
                        return (
                            <div key={project.title} className={`flex flex-row flex-wrap mb-10 border-white ${index < (projects.length - 1) ? "border-b" : ""}`}>
                                {/* Description */}
                                <div className="project-description flex flex-col md:pr-8 gap-2 flex-1 min-w-[240px]">
                                    <h2 className="text-xl font-bold">{project.title}</h2>
                                    {/* Categories */}
                                    <div className="flex flex-row flex-wrap">
                                        {project.categories.map((category: any, index: number) => {
                                            return <div key={category}>{category}{index < (project.categories.length - 1) ? <span className="mx-2">|</span> : ""}</div>
                                        })}
                                    </div>
                                    <h3 className="text-md">{project.role}</h3>
                                    {/* URL */}
                                    <div className="flex flex-row flex-wrap">
                                        <a href={`${project.url.indexOf("http") === -1 ? "https://" : ""}${project.url}`} target="_blank" className="text-sm">{project.url}</a>
                                    </div>
                                    {/* Tags */}
                                    <div className="flex flex-row flex-wrap gap-2 my-1">
                                        {project.tags.map((tag: string, index: number) => {
                                            return <div key={tag} className="px-2 py-1 bg-gray-200 text-black rounded-md text-xs">{tag}</div>
                                        })}
                                    </div>
                                    {/* Excerpt */}
                                    <p>{project.excerpt}</p>
                                    {/* Partners */}
                                    {project.partners ? (
                                        <p className=""><span className="font-bold">Partners: </span>{project.partners.join(", ")}</p>
                                    ) : ""}
                                </div>
                                {/* Image */}
                                <div className="project-image aspect-[16/10] max-w-3xl mt-2">
                                    <img className="w-auto" src={projectFeatureImage} alt={project.title} />
                                </div>
                            </div>
                        )
                    })}
                </Suspense>
            </div>
        </>
    )
}