const Day = require('../models/Day')

exports.index = (req, res) => {
    Day.find({}, (err, days) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, payload: days });
    })
};

exports.create = (req,res) => {
    Day.create(req.body, (err, day) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, payload: day });
    })
};

exports.show = (req, res) => {
    Day.findById(req.params.day_id, (err, day) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, payload: day })
    })
};

exports.update = (req, res) => {
    Day.findByIdAndUpdate(req.params.day_id, req.body, (err, day) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, payload: day});
    })
};

exports.delete = (req, res) => {
    let { day_id } = req.prams;
    Day.findOneAndDelete(day_id, (err, deletedDay) => {
        if (err) res.json({ success: false, err});
        res.json({ success: true, payload: deletedDay})
    })
}