const Tasting = require('../models/Tasting'); 

exports.list = async (req, res) => {

try {
    const totalCountries = await Tasting.aggregate([
        { $group: { _id: "$country", total: { $sum: 1 } } },
        { $count: "total" }
    ])
  
    const tasterCountSummary = tasterCountSummaryRef.map(t => ({ name: t._id, total: t.total }));
    res.render("index", { 
         totalCountries: totalCountries[0].total });

} catch (e) {
    res.status(404).send({
        message: `error rendering page`,
    });
}
}