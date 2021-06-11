import Bank from "../model/bank";
import fs from "fs";
import path from "path";

const getAllBanks = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All banks",
  });
};

//* Create new room => /api/banks
const createBank = async (req, res) => {
    console.log('............',req.file)
  try {
    const profileBuffer = req.file
    console.log(profileBuffer);

    const bank = new Bank({
      title: req.body.title,
      photo: profileBuffer,
    });
    await bank.save();
  } catch (error) {
    console.log(error);
  }

  //   const imageUrl = req.file
  //   const title = req.body.title;
  //   const bank = new Bank({
  //     title,
  //     photo: imageUrl,
  //   });
  //   bank
  //     .save()
  //     .then((result) => res.status(201).json(result))
  //     .catch((err) => res.status(400).json({ error: err }));
  //   try {
  //     const bank = await Bank.create(req.body);

  //     res.status(200).json({
  //       success: true,
  //       bank,
  //     });
  //   } catch (err) {
  //     res.status(400).json({
  //       success: false,
  //       error: err.message,
  //     });
  //   }
};

export { getAllBanks, createBank };
