const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeeSchema = new Schema({
  name:{
    type: String,

  },
  username:{
    type: String
  },
  phone:{
    type: String
  },
  email:{
    type: String
  },
  role:{
    type: String
  },
  isActive:{
    type: String
  },
  isBlock:{
    type: String
  },
  bio:{
    type: String
  },
  image:{
    type: String
  },
  isValidate:{
    type: String
  },
  createdAt:{
    type: String
  }
})

module.exports = mongoose.model('employee',employeeSchema)
