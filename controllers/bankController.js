const getAllBanks = (req, res) => {
    res.status(200).json({
        success: true,
        message: 'All banks'
    })
}

export {
    getAllBanks,
}