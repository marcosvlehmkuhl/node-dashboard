import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cookieParser())

app.get('/', (req, res) => {
  console.log(req.cookies)
  res.send('Hello World')
})

app.get('/login', (req, res) => {
  const defaultCookieConfig = {
    domain: '.nsctotal.local'
  }

  res.cookie('foo', 'asdsdfas', defaultCookieConfig)
  res.send('Login')
})

app.get('/logout', (req, res) => {
  const defaultCookieConfig = {
    domain: '.nsctotal.local'
  }

  res.clearCookie('foo', defaultCookieConfig)
  res.send('Logout')
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
