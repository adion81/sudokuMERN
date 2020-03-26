const mongoose = require('mongoose');


const SudokuSchema = new mongoose.Schema({
    
},{timestamps:true});

const Sudoku = mongoose.model("Sudoku",SudokuSchema);

module.exports = Sudoku;