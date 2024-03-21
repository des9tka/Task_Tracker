<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']">
    <h3 class="task-name-container">
      {{ task.text }} #{{ task.id }}
      <i @click="$emit('delete_task', task.id)" class="fas fa-times"></i>
    </h3>
    <p>
      {{ task.time }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ['task'],
}

</script>

<style scoped>
.fas {
  color: red;
}

.task {
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.reminder {
  border-left: 5px solid green;
}

.task-name-container {
  display: flex;
  justify-content: space-between;
}

</style>
