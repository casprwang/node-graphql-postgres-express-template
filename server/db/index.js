import Sequelize from 'sequelize'

const sequelize = new Sequelize('graphqlpost', 'graphql_tester', 'j', {
  host: 'localhost',
  dialect: 'postgres'
})


const db = {
  User: sequelize.import('./user')
}


db.sequelize = sequelize



export default db


