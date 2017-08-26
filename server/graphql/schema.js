import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './type'
import resolvers from './resolver'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

module.exports = schema
