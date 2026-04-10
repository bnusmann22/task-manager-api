class TaskService {
    constructor() {
        this.tasks = [];
        this.counter = 1;
    }

    getAllTasks() {
        return this.tasks;
    }

    getTaskById(id) {
        return this.tasks.find(task => task.id === id);
    }

    createtask(taskData) {
        const newTask = {
            id: this.counter++,
            title: taskData.title,
            description: taskData.description || '',
            status: taskData.status || 'pending',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.tasks.push(newTask);
        return newTask;
    }

    updatetask(id, updateData) {
        const task = this.getTaskById(id);
        if (!task) return null;

        Object.keys(updateData).forEach(key => {
        if (updateData[key] !== undefined) {
            task[key] = updateData[key];
        }
        });
        task.updatedAt = new Date().toISOString();
        return task;

    }
    
    deletetask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index === -1) return false;
        this.tasks.splice(index, 1);
        return true;
    }
}


module.exports = new TaskService();