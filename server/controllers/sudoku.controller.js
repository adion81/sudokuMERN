const Sudoku = require('../models/sudoku.model');

module.exports = {
    index: (req,res) => {
        Sudoku.find()
            .then( results => res.json(results) )
            .catch(err => res.status(400).json(err.errors));
    },
    create: (req,res) => {
        Sudoku.create(req.body)
            .then( result => res.json(result) )
            .catch(err => res.status(400).json(err.errors));
    },
    show: (req,res) => {
        Sudoku.findById({_id:req.params.id})
            .then( result => res.json(result) )
            .catch(err => res.status(400).json(err.errors));
    },
    update: (req,res) => {
        Sudoku.findOneAndUpdate({_id: req.params.id},req.body,{runValidators:true,useFindAndModify:true,context: 'query'})
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors));
    },
    destroy: (req,res) => {
        Sudoku.removeOne({_id: req.params.id})
            .then(result => res.json(result))
            .catch(err => res.status(400).json(err.errors));
    }
}