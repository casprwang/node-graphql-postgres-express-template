import app from './server'
import db from './server/db'

const PORT = 3000

db.sequelize.sync().then(() =>
  app.listen(PORT, err => {
    if (err) throw err
    console.log(`listening to ${PORT}`)
  })
)
