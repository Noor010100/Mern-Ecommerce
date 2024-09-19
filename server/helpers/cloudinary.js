const cloudinary = require('cloudinary').v2;
const multer = require('multer')

cloudinary.config({
    cloud_name: "dmjmdnath",
    api_key: '316247833443169',
    api_secret: '4G4THyYUkDJN9wHpx90jar58TrY'
})

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
    });
  
    return result;
  }
  
  const upload = multer({ storage });
  
  module.exports = { upload, imageUploadUtil };