import { createClient } from "contentful"
import { ArticleList } from '@/app/components'
import { Suspense } from 'react'

async function getData() {

    if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
        console.error("Contentful space ID and access token not found")
        return []
    }
    const client = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.CONTENTFUL_SPACE_ID || "",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
    })
  
    return client
      .getEntries({
        content_type: 'article',
      })
      .then((response: any) => response.items)
      .catch((error: any) => {
        console.error(error)
        return []
      })
  
  }

export default async function Articles() {

    const contentfulArticles = await getData();
    const articles = contentfulArticles.map((article: any) => { return article.fields });
    const publications = articles.map((article: any) => { return article.publication }).flat().filter((value: any, index: any, array: any) => { return array.indexOf(value) === index });;

    return (
        <section className="flex flex-row flex-wrap md:px-8">
            <Suspense fallback={<div>Loading...</div>}>
                <ArticleList articles={articles} publications={publications}></ArticleList>
            </Suspense>
        </section>
    )
}