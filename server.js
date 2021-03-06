require('dotenv').config()

const 
    express = require('express'),
    app = express(),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/put-it-on',
    PORT = process.env.PORT || 3001,
    usersRouter = require('./routes/users.js'),
    daysRoutes = require('./routes/days.js'),
    path = require('path');
   
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
    console.log(err || `Connected to MongoDB.`)
})

app.use(logger('dev'))
app.use(express.json())

app.use(express.static(path.join(__dirname, "client", "build")));

app.get('/api', (req, res) => {
    res.json({message: "Put It On root page."})
})

app.use('/api/users', usersRouter),
app.use('/api/days', daysRoutes)

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})


app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})