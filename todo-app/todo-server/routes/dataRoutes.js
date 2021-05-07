const express = require('express')
const router = express.Router()
const dataController = require('../controller/dataControlle_db');; 

//format 
router.get('/test', (req, res) => {
    return res.status(200).send("api call success")
})

router.put('/write', dataController.write)
router.get('/list', dataController.list)
router.get('/category', dataController.category)
router.delete('/remove', dataController.remove)

//test
// router.get('/trial', dataController.getProjectData)

module.exports = {
    router
}
