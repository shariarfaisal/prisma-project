const express = require('express')
const bodyParser = require('body-parser')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(bodyParser.json())

app.post('/employee', async (req,res) => {
  const { username, password } = req.body
  const employee = await prisma.employee.create({
    data:{
      username, password
    }
  })
  res.json(employee)
})


const server = app.listen(4000, () => {
  console.log('Server ready at: http://localhost:4000')
})
