let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dataBaseConfig = require('./database/db');

// Connecting mongoDB
mongoose.Promise = global.Promise;

mongoose.connect(dataBaseConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
        console.log('Database connected successfully ')
        console.log(mongoose.connections.othersDb)
    },
    error => {
        console.log('Could not connected to database : ' + error)
    }
)


const dealRoute = require('./routes/deal.route')
const userRoute = require('./routes/user.route')

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());

// RESTful API root
app.use('/api', dealRoute)
app.use('/api/user', userRoute)

// PORT
const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log('PORT Connected on: ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
});


// error handler
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});