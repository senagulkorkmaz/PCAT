const express = require('express')
const ejs = require('ejs')
const path = require('path')

const app = express();

// TEMPLATE ENGINE
app.set("view engine", "ejs");


// const myLogger = (req, res, next) => {
//     console.log('Middleware Log 1');
//     next();
// }

// const myLogger2 = (req, res, next) => {
//     console.log('Middleware Log 2');
//     next();
// }

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(myLogger)
// app.use(myLogger2)

// ROUTES
app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'temp/index.html'))
    res.render('index')

    // const photo = {
    //     id: 1,
    //     name: "Photo Name",
    //     description: "Photo Description"
    // }
    // res.send(photo)
    // res.send('MERHABA')
})

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/add', (req, res) => {
    res.render('add');
})
app.post('/photos', (req, res) => {
    console.log(req.body);
    res.redirect('/')
});


const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
})
