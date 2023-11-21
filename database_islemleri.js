const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db',
    // {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true
    // }
);

// create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
})

const Photo = mongoose.model('Photo', PhotoSchema); // Photo adına otomatik collection oluşturur.

// create a photo
// Photo.create({
//     title: 'Photo Title 3',
//     description: 'Photo description 3 lorem ipsum',
// });

// read a Photo (Eski Sürüm)
// Photo.find({}, (err, data) => {
//     console.log(data);
// });

// read a Photo (Yeni SÜrüm)
// async function readPhotos() {
//     try {
//         const data = await Photo.find({}); console.log(data);
//     }
//     catch (err) { console.log(err); }
// }

// readPhotos();

//update a Photo
// const id = "655b0c70b33e1b7b7665d50d";

// ESKİ SÜRÜM
// Photo.findByIdAndUpdate(
//     id,
//     {
//         title: "Photo Title 1 Updated",
//         description: "Photo description 1 Updated",
//     }, (err, data) => {
//         console.log(data)
//     }
// );


//update 
// YENİ SÜRÜM
// const update = {
//     title: 'Photo Title 1 Updated',
//     description: 'Photo Description 1 Updated',
// };
// const updatePhoto = async () => {
//     try {
//         const updatedPhoto = await Photo.findByIdAndUpdate(id, update, { new: true });
//         if (!updatedPhoto) {
//             console.log('Fotoğraf bulunamadı');
//         } else {
//             console.log('Güncellenmiş fotoğraf:', updatedPhoto);
//         }
//     } catch (error) {
//         console.error('Hata:', error);
//     }
// };
// updatePhoto();


// delete a Photo
const id = "655b0c70b33e1b7b7665d50d";

//ESKİ SÜRÜM
// Photo.findByIdAndDelete(id, (err, data) => {
//     console.log("Photo is removed..")
// })

//YENİ SÜRÜM
// const deletePhoto = async () => {
//     try {
//         const deletedPhoto = await Photo.findByIdAndDelete(id);
//         if (!deletedPhoto) {
//             console.log('Fotoğraf bulunamadı.');
//         }
//         else {
//             console.log('Siliniş Fotoğraf:', deletedPhoto);
//         }
//     }
//     catch (error) { console.error('Hata:', error); }
// };

// deletePhoto();