const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/',     taskController.getAllTasks);
router.get('/:id',  taskController.getTaskById);
router.post('/',    taskController.createtask);
router.put('/:id',  taskController.updatetask);
router.delete('/:id', taskController.deletetask);

module.exports = router;