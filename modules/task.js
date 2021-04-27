const isString = require('./utils').isString

const tasks = ['todo1','todo2','todo3']

const validateTasks = (tasks)=>{
    for (let i = 0; i < tasks.length; i++) {

        if (isString(tasks[i])) {
            console.log(tasks[i]);
        }
        
    }
}


validateTasks(tasks)