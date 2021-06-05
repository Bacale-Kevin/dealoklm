import Bank from "../model/bank";

const getAllBanks = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All banks",
  });
};

//* Create new room => /api/bank
const createBank = async (req, res) => {
  try {
    const bank = await Bank.create(req.body);

    res.status(200).json({
      success: true,
      bank,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      error: err.message,
    });
  }
};

export { getAllBanks, createBank };
