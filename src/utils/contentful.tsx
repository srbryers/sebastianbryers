import { createClient } from 'contentful'

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE_ID || "",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
})

function getContent(type: string) {
  return client
    .getEntries({
      content_type: type,
    })
    .then((response: any) => response.items)
    .catch((error: any) => {
      console.log('Error occurred while fetching Entries')
      console.error(error)
    })
}

export { getContent }