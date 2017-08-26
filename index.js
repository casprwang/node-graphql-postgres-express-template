import app from './server'

const PORT = 3000

app.listen(PORT, (err)=>{
  if (err) throw err
  console.log(`listening to ${PORT}`)
})
