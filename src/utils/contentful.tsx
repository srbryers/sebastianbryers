const contentful = require('contentful')
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '9pqne9vo3zr5',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'IJnBbd9PWYImlQYWq55O1TdVIUI_ri7APXCLqNzI9EA',
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