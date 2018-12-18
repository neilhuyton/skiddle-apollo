const { GraphQLServer } = require('graphql-yoga')
const fetch = require('node-fetch')

const baseURL = `https://www.skiddle.com/api/v1`
const apiKey = '?api_key=3b63de286a0a3ff9c27e3f8bdd7f84bc'

const mapArgs = (args) => {
  const toMap = {genreId: g};
  let mappedArgs = {};
  Object.keys(args).map((arg, i, arr) => {
    if (arg) {

    }
  })
  return 
}

const parseArgs = (args) => {
  let sep = '&',  qs = sep;
  Object.keys(args).map((arg, i, arr) => {
    const separator = i === arr.length-1 ? '' : sep;
    args[arg] !== null && (qs += `${arg}=${args[arg]}${separator}`)
  })

  return qs
}

const resolvers = {
  Query: {
    events: (parent, args) => {
      const qs = parseArgs(args);
      return fetch(`${baseURL}/events/search${apiKey}${qs}`).then(res => res.json()).then(myJson => myJson.results)
    },
    event: (parent, args) => {
      const { id } = args
      return fetch(`${baseURL}/events/${id}${apiKey}`).then(res => res.json()).then(myJson => myJson.results)
    },
    venues: (parent, args) => {
      const qs = parseArgs(args);
      return fetch(`${baseURL}/venues/${apiKey}${qs}`).then(res => res.json()).then(myJson => myJson.results)
    },
    venue: (parent, args) => {
      const { id } = args
      return fetch(`${baseURL}/venue/${id}${apiKey}`).then(res => res.json()).then(myJson => myJson.results)
    },
    artists: (parent, args) => {
      const qs = parseArgs(args);
      return fetch(`${baseURL}/artists/${apiKey}${qs}`).then(res => res.json()).then(myJson => myJson.results)
    },
    genres: (parent, args) => {
      const qs = parseArgs(args);
      return fetch(`${baseURL}/genres/${apiKey}${qs}`).then(res => res.json()).then(myJson => myJson.results.rows)
    },
  },
  // Post: {
  //   author: parent => {
  //     const { id } = parent
  //     return fetch(`${baseURL}/posts/${id}/user`).then(res => res.json())
  //   }
  // },
  // User: {
  //   posts: parent => {
  //     const { id } = parent
  //     return fetch(`${baseURL}/users/${id}/posts`).then(res => res.json())
  //   }
  // }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
})

server.start({debug: true}, () => {})
