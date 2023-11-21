const express = require('express')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
const Photo = require('./models/Photo');

const app = express();

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

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
app.use(fileUpload());

// app.use(myLogger)
// app.use(myLogger2)

// ROUTES
// app.get('/', (req, res) => {
//     // res.sendFile(path.resolve(__dirname, 'temp/index.html'))
//     res.render('index')

//     // const photo = {
//     //     id: 1,
//     //     name: "Photo Name",
//     //     description: "Photo Description"
//     // }
//     // res.send(photo)
//     // res.send('MERHABA')
// })

app.get('/', async (req, res) => {
    const photos = await Photo.find({}).sort('-dateCreated')
    res.render('index', {
        photos,
    });
})

app.get('/photos/:id', async (req, res) => {
    // console.log(req.params.id)
    // res.render('about');
    const photo = await Photo.findById(req.params.id)
    res.render('photo', {
        photo
    })
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/add', (req, res) => {
    res.render('add');
})
app.post('/photos', async (req, res) => {
    // console.log(req.files.image) // Yüklenen görselle ilgili bilgilere ulaşılır.
    // console.log(req.body);
    // await Photo.create(req.body);
    // res.redirect('/')

    const uploadDir = 'public/uploads';

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir)
    }

    let uploadeImage = req.files.image
    let uploadPath = __dirname + '/public/uploads/' + uploadeImage.name

    uploadeImage.mv(uploadPath,
        async () => {
            await Photo.create({
                ...req.body,
                image: '/uploads/' + uploadeImage.name
            });
            res.redirect('/')
        })
});


const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
})
