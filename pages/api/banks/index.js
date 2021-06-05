import dbConnect from 'config/dbConnect'
import nc from 'next-connect'
import { createBank, getAllBanks } from "../../../controllers/bankController"

const handler = nc()

dbConnect()

handler.get(getAllBanks)
handler.post(createBank)

export default handler