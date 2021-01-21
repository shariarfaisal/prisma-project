const mongoose = require('mongoose')
const Schema = mongoose.Schema

const roleSchema = new Schema({
  name: String,
  scopes:{
    client: { type: String, enum: ['read','write','update','delete']},
    employee:{ type: String, enum: ['read','write','update','delete']},
    item:{ type: String, enum: ['read','write','update','delete']},
    promo:{ type: String, enum: ['read','write','update','delete']},
    stock:{ type: String, enum: ['read','write','update','delete']},
    user:{ type: String, enum: ['read','write','update','delete']},
    workProcess:{ type: String, enum: ['read','write','update','delete']},
    product:{ type: String, enum: ['read','write','update','delete']},
  }
})
