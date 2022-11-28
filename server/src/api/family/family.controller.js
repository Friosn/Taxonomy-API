const Family = require('./family.model')

const setError = require('../../helper/error/handle.error')

const getAllFamilies = async (req, res, next) => {
  try {
    const families = await Family.find().populate('species')
    res.json({
      status: 200,
      message: 'All families recovered!',
      data: { families }
    })
  } catch (error) {
    return next(setError(500, 'Failiure recovering Families 🍂'))
  }
}

const getOneFamily = async (req, res, next) => {
  try {
    const { id } = req.params
    const clase = await Family.findById(id)
    res.json({
      status: 200,
      message: 'Single Family recovered successfully!',
      data: { clase }
    })
  } catch (error) {
    return next(setError(500, 'Failiure recovering single Family 🍂'))
  }
}

const postFamily = async (req, res, next) => {
  try {
    const newFamily = new Family()
    newFamily.name = req.body.name
    newFamily.class = req.body.class
    newFamily.order = req.body.order
    newFamily.species = req.body.species

    const newFamilyToDB = await newFamily.save()
    return res.json({
      status: 200,
      message: 'New biological Family successfully added!',
      data: { newFamilyToDB }
    })
  } catch (error) {
    return next(setError(500, 'Failiure posting new Family 🍂'))
  }
}

const patchFamily = async (req, res, next) => {
  try {
    const { id } = req.params
    const familyToPatch = new Family(req.body)
    familyToPatch._id = id
    const updateFamily = await Family.findByIdAndUpdate(id, familyToPatch)
    res.json({
      status: 200,
      message: 'Update made successfully!',
      data: { updateFamily }

    })
  } catch (error) {
    return next(setError(500, 'Failiure updating Family 🍂'))
  }
}

const deleteFamily = async (req, res, next) => {
  try {
    const { id } = req.params
    const familyToDelete = await Family.findByIdAndDelete(id)
    return res.json({
      status: 200,
      message: 'Family deleted successfully!',
      data: { familyToDelete }
    })
  } catch (error) {
    return next(setError(500, 'Failiure deleting Family 🍂'))
  }
}

module.exports = { getAllFamilies, getOneFamily, patchFamily, postFamily, deleteFamily }
