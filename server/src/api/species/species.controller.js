const Species = require('./Species.model')

const setError = require('../../helper/error/handle.error')

const getAllSpecies = async (req, res, next) => {
  try {
    const species = await Species.find().populate('order class species')
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
    const clase = await Species.findById(id)
    res.json({
      status: 200,
      message: 'Single Species recovered successfully!',
      data: { clase }
    })
  } catch (error) {
    return next(setError(500, 'Failiure recovering single Species 🍂'))
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
      message: 'New biological Species successfully added!',
      data: { newSpeciesToDB }
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
    const SpeciesToDelete = await Species.findByIdAndDelete(id)
    return res.json({
      status: 200,
      message: 'Species deleted successfully!',
      data: { SpeciesToDelete }
    })
  } catch (error) {
    return next(setError(500, 'Failiure deleting Species 🍂'))
  }
}

module.exports = { getAllSpecies, getOneSpecies, patchSpecies, postSpecies, deleteSpecies }
