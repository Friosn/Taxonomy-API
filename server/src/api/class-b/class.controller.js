const Class = require('./class.model')

const setError = require('../../helper/error/handle.error')

const getAllClasses = async (req, res, next) => {
  try {
    const classes = await Class.find().populate('orders')
    res.json({
      status: 200,
      message: 'All classes recovered!',
      data: { classes }
    })
  } catch (error) {
    return next(setError(500, 'Failiure recovering Classes 🍂'))
  }
}

const getOneClass = async (req, res, next) => {
  try {
    const { id } = req.params
    const clase = await Class.findById(id)
    res.json({
      status: 200,
      message: 'Class recovered successfully!',
      data: { clase }
    })
  } catch (error) {
    return next(setError(500, 'Failiure recovering Class 🍂'))
  }
}

const getClassByName = async (req, res, next) => {
  const { name } = req.params
  try {
    const clase = await Class.find({ name })
    res.json({
      status: 200,
      message: 'Class successfully recovered!',
      data: { clase }
    })
  } catch (error) {
    next(setError(400, 'This taxonomical Class name is not correct'))
  }
}

const postClass = async (req, res, next) => {
  try {
    const newClass = new Class()
    newClass.name = req.body.name
    newClass.reproduction = req.body.reproduction
    newClass.incuvation = req.body.incuvation
    newClass.skeleton = req.body.skeletonType
    newClass.skin = req.body.skinType
    newClass.orders = req.body.orders
    const newClassToDB = await newClass.save()
    return res.json({
      status: 200,
      message: 'New biological Class successfully added!',
      data: { newClassToDB }
    })
  } catch (error) {
    return next(setError(500, 'Failiure posting new Class 🍂'))
  }
}

const patchClass = async (req, res, next) => {
  const { id } = req.params
  try {
    const classToPatch = new Class(req.body)
    classToPatch._id = id
    const updateClass = await Class.findByIdAndUpdate(id, classToPatch)
    res.json({
      status: 200,
      message: 'Update made successfully!',
      data: { updateClass }

    })
  } catch (error) {
    return next(setError(500, 'Failiure updating Class 🍂'))
  }
}

const deleteClass = async (req, res, next) => {
  try {
    const { id } = req.params
    const classToDelete = await Class.findByIdAndDelete(id)
    return res.json({
      status: 200,
      message: 'Class deleted successfully!',
      data: { classToDelete }
    })
  } catch (error) {
    return next(setError(500, 'Failiure deleting Class 🍂'))
  }
}

module.exports = { getAllClasses, getOneClass, getClassByName, patchClass, postClass, deleteClass }
