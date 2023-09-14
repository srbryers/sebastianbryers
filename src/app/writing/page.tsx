import { getContent } from '@/utils/contentful'
import { ArticleList } from '@/app/components'
import { Suspense } from 'react'

export default async function Articles() {

    const contentfulArticles = await getContent('article');
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