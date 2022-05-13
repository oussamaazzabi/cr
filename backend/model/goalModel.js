const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
  text:{
    type: String,
  required: [true, 'please add atext value']
}
},
{
  timetamps: true,
})

module.exports = mongoose.model('Goal', goalSchema)