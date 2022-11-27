const Species = require('./Species.model')
const { deleteFile } = require('../../middlewares/deleteImg.middleware')
const setError = require('../../helper/error/handle.error')

const getAllSpecies = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query
    const species = await Species.find().limit(limit * 1).skip((page - 1) * limit)
    res.json({
      status: 200,
      message: 'All Species recovered!',
      data: { species }
    })
  } catch (error) {
    return next(setError(500, 'Failiure recovering Species 🍂'))
  }
}

const getOneSpecies = async (req, res, next) => {
  try {
    const { id } = req.params
    const species = await Species.findById(id)
    res.json({
      status: 200,
      message: 'Single Species recovered successfully!',
      data: { species }
    })
  } catch (error) {
    return next(setError(500, 'Failiure recovering single Species 🍂'))
  }
}

const getSpeciesByName = async (req, res, next) => {
  const { name } = req.params
  try {
    const speciesName = await Species.find({ name })
    res.json({
      status: 200,
      message: 'Species successfully recovered 🧸!',
      data: { speciesName }
    })
  } catch (error) {
    next(setError(400, 'This Species name is not correct'))
  }
}

const postSpecies = async (req, res, next) => {
  try {
    const newSpecies = new Species(req.body)
    if (req.file) {
      newSpecies.image = req.file.path
    }
    const newSpeciesToDB = await newSpecies.save()
    return res.json({
      status: 200,
      message: 'New Species successfully added 🦖',
      newSpeciesToDB
    })
  } catch (error) {
    return next(setError(500, 'Failiure posting new Species 🍂'))
  }
}

const patchSpecies = async (req, res, next) => {
  try {
    const { id } = req.params
    const speciesToPatch = new Species(req.body)
    speciesToPatch._id = id
    const updateSpecies = await Species.findByIdAndUpdate(id, speciesToPatch)
    res.json({
      status: 200,
      message: 'Update made successfully!',
      data: { updateSpecies }

    })
  } catch (error) {
    return next(setError(500, 'Failiure updating Species 🍂'))
  }
}

const deleteSpecies = async (req, res, next) => {
  try {
    const { id } = req.params
    const speciesToDelete = await Species.findByIdAndDelete(id)
    if (speciesToDelete.image) {
      deleteFile(speciesToDelete.image)
    }

    if (!speciesToDelete) {
      return next(setError(404, 'Species not found'))
    }

    return res.status(200).json({
      message: 'Species deleted successfully!',
      speciesToDelete
    })
  } catch (error) {
    return next(setError(500, 'Failiure deleting Species 🍂'))
  }
}

module.exports = { getAllSpecies, getOneSpecies, getSpeciesByName, patchSpecies, postSpecies, deleteSpecies }
