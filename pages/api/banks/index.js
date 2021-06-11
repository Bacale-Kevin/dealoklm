import dbConnect from 'config/dbConnect'
import multer from 'multer'
import nc from 'next-connect'
import { createBank, getAllBanks } from "../../../controllers/bankController"
import sharp from 'sharp'

// const upload = multer();

const storage = multer.diskStorage({})

const fileFilter = (req, file, cb) => {
    if(file.mimetype.startsWith('image')){
        cb(null, true)
    }else{
        cb('invalid image file!', false)
    }
}

const uploads = multer({ storage, fileFilter})


const handler = nc()

dbConnect()

handler.get(getAllBanks)
handler.use(uploads.single('photo')).post(createBank)

export default handler