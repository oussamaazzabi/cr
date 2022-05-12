const asyncHandler = require('express-async-handler')
const { object } = require("webidl-conversions")

const getGoals = asyncHandlerasync((req,res) => {
  res.status(200).json({mesaage: 'Get goals'})
})

const setGoals = asyncHandler(async(req,res) => {
  if(!req.body.text){
    res.status(400)
    throw new Error('please add a text field')
  }
  res.status(200).json({message: 'Set goal'})
})

const updateGoals = asyncHandler(async(req,res) => {
  res.status(200).json({message: 'update goal ${req.params.id}'})
})

const deleteGoals = asyncHandler(async(req,res) => {
  res.status(200).json({message: 'delete goal ${req.params.id}'})
})

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
  
}