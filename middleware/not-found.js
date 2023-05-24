const notFound = (req,res) => {
    res.status(404).json({msg:"not found"});
}
module.exports = notFound