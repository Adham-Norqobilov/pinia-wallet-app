import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodostore = defineStore('todoList', ()=>{

    const tasks = ref([{
        id: 1,
        text: 'Dars qilish!',
        done: false,
    }])
    const userName = ref('Adham')

    

    function addTask(newTask){
        tasks.value.push({
            id: Date.now(),
            text: newTask,
            done: false
        })
    }

    function toggleTask(id){
        const task = tasks.value.find(t => t.id ===id)
        if(task){
             task.done = !task.done
        }
    }
    return {tasks, userName, addTask, toggleTask}
},
{
    persist:{
        storage: localStorage,
        paths: ['tasks', 'userName']
    }
})
