import app from './server'

const PORT = process.env.PORT || 3000

global.db.sequelize.sync().then(() =>
  app.listen(PORT, err => {
    if (err) throw err
    console.log(`listening to ${PORT}`)
  })
)
