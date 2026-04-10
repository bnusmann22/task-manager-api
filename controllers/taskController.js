const taskService = require('../services/taskService');

class TaskController {
    getAllTasks(req, res) {
        const tasks = taskService.getAllTasks();
        res.status(200).json(tasks);
    }
    getTaskById(req, res) {
        const id = parseInt(req.params.id);
        const task = taskService.getTaskById(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(task);
    }
    createtask(req, res) {
        const taskData = req.body;
        const newTask = taskService.createtask(taskData);
        res.status(201).json({ message: 'New task created', task: newTask });
    }
    updatetask(req, res) {
        const id = parseInt(req.params.id);
        const updateData = req.body;
        const updatedTask = taskService.updatetask(id, updateData);
        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task updated successfully', task: updatedTask });
    }
    deletetask(req, res) {
        const id = parseInt(req.params.id);
        const deleted = taskService.deletetask(id);
        if (!deleted) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json({ message: 'Task deleted successfully' });
    }
}

module.exports = new TaskController();