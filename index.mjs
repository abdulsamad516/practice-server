import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/home', (req, res) => {
    res.send('Home')
})

app.get('/profile', (req, res) => {
    res.send('Profile')
})

app.get('/about', (req, res) => {
    res.send('about')
})

app.listen(port, () => {
    console.log(`server app listening on port ${port}`)
})