<template>
  <div class="app-container">
    <h1>{{ userName }}</h1>

    <div class="input-group">
      <input 
        type="text" 
        v-model="userInputValue" 
        @keyup.enter="handleAddTask" 
        placeholder="Nima qilmoqchisiz..."
      >
      <button @click="handleAddTask">Qo'shish</button>
    </div>

    <ul>
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <input 
          type="checkbox" 
          :checked="task.done" 
          @change="toggleTask(task.id)" 
        />
        <span :class="{ 'completed': task.done }" @click="toggleTask(task.id)">
          {{ task.text }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodostore } from '@/stores/todoStore';
import { storeToRefs } from 'pinia'

const todoStore = useTodostore()
const userInputValue = ref('')

const { tasks, userName } = storeToRefs(todoStore)
const { addTask, toggleTask } = todoStore

const handleAddTask = () => {
  if (userInputValue.value.trim() !== "") {
    addTask(userInputValue.value)
    userInputValue.value = ''
  }
}
</script>

<style scoped>
.app-container {
  max-width: 350px;
  margin: 100px auto;
  padding: 25px;
  background-color: #f0fdf4;
  border: 2px solid #42b883;
  border-radius: 24px;
  box-shadow: 0 15px 35px rgba(66, 184, 131, 0.1);
  font-family: 'Inter', sans-serif;
}

h1 {
  color: #166534;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 25px;
}

input[type="text"] {
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  border: 2px solid #bbf7d0;
  border-radius: 12px;
  background-color: white;
  outline: none;
  transition: 0.3s;
  text-align: center;
}

input[type="text"]:focus {
  border-color: #42b883;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #42b883;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background-color: #166534;
  transform: translateY(-2px);
}

ul {
  list-style: none;
  padding: 0;
}

.task-item {
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: white;
  border: 1px solid #dcfce7;
  border-radius: 12px;
  margin-bottom: 8px;
}

input[type="checkbox"] {
  accent-color: #42b883;
  width: 18px;
  height: 18px;
}

span {
  margin-left: 10px;
  color: #374151;
  font-size: 14px;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #9ca3af;
}
</style>