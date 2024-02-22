import { createClient } from 'contentful'


function getContent(type: string) {
  if (!process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || !process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) {
    throw new Error('Contentful space ID and access token are required')
  } else {
    const client = createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
    })

    return client
      .getEntries({
        content_type: type,
      })
      .then((response: any) => response.items)
      .catch((error: any) => {
        console.error(error)
        return []
      })
  }
}

export { getContent }