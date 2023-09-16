import { getContent } from "@/utils/contentful"
import { ProjectList } from "@/app/components"

export default async function Projects({
  }: {
  }) {

    // Fetch projects data
    const contentfulProjects = await getContent('project');
    const projects = contentfulProjects.map((project: any) => { return project.fields }).reverse();
    const categories = projects.map((project: any) => { return project.categories }).flat().filter((value: any, index: number, array: any) => { return array.indexOf(value) === index });;
    const tags = projects.map((project: any) => { return project.tags }).flat().filter((value: any, index: number, array: any) => { return array.indexOf(value) === index });

    return (
      <section className="flex flex-row flex-wrap md:px-8">
          <ProjectList projects={projects} categories={categories} tags={tags}></ProjectList>
      </section>
    )
  }