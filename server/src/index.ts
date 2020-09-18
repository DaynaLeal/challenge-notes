import express from 'express'
import cors from 'cors'
import routeHandler from './routes/'

const app = express()
// This allows the browser to make requests to this API ( which is running on a different port ).
// Normally, CORS blocks requests like those, but this allows ALL browsers to make this request.
// Normally, we would limit this value to be only the domain name where our website is hosted.
app.use(cors())

// This sets up all the routes we are listening for
routeHandler(app)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Hacking the mainframe...')
  setTimeout(() => {
    console.log('🚀  I need to capture the Avatar!')
  }, 2000)
})
