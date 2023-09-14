import { getContent } from "@/utils/contentful"
import { ProjectList } from "@/app/components"
import { Suspense } from "react"

export default async function Projects({
  }: {
  }) {

    // Fetch projects data
    const contentfulProjects = await getContent('project');
    const projects = contentfulProjects.map((project: any) => { return project.fields }).reverse();
    const categories = projects.map((project: any) => { return project.categories }).flat().filter((value, index, array) => { return array.indexOf(value) === index });;
    const tags = projects.map((project: any) => { return project.tags }).flat().filter((value, index, array) => { return array.indexOf(value) === index });

    return (
      <section className="flex flex-row flex-wrap md:px-8">
        <Suspense fallback={<div>Loading...</div>}>
            <ProjectList projects={projects} categories={categories} tags={tags}></ProjectList>
        </Suspense>
      </section>
    )
  }