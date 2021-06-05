import dbConnect from 'config/dbConnect'
import nc from 'next-connect'
import { getAllBanks } from "../../../controllers/bankController"

const handler = nc()

dbConnect()

handler.get(getAllBanks)

export default handler