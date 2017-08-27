import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'
import schema from './graphql/schema.js'
import db from './db'

const app = express()

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { db } })
)

module.exports = app
