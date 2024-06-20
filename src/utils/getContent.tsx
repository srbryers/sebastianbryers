import { createClient } from 'contentful'
import { cache } from 'react'
import 'server-only'

export const preload = async (content_type: string) => {
  void getContent(content_type)
}

export const getContent = cache(async (content_type: string) => {
  const client = createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.CONTENTFUL_SPACE_ID || process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || "",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || "",
  })

  return client
    .getEntries({
      content_type: content_type,
    })
    .then((response: any) => response.items)
    .catch((error: any) => {
      console.error(error)
      return []
    })
})