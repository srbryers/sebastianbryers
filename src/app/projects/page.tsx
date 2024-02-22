import { createClient } from "contentful"
import { ProjectList } from "@/app/components"

async function getData() {

  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
      console.error("Contentful space ID and access token not found")
      return []
  }
  const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
  })

  return client
    .getEntries({
      content_type: 'project',
    })
    .then((response: any) => response.items)
    .catch((error: any) => {
      console.error(error)
      return []
    })

}

export default async function Projects({
  }: {
  }) {

    // Fetch projects data
    const contentfulProjects = await getData();
    const projects = contentfulProjects.map((project: any) => { return project.fields }).reverse();
    const categories = projects.map((project: any) => { return project.categories }).flat().filter((value: any, index: number, array: any) => { return array.indexOf(value) === index });;
    const tags = projects.map((project: any) => { return project.tags }).flat().filter((value: any, index: number, array: any) => { return array.indexOf(value) === index });

    return (
      <section className="flex flex-row flex-wrap md:px-8">
          <ProjectList projects={projects} categories={categories} tags={tags}></ProjectList>
      </section>
    )
  }

