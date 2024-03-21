<template>
  <div :key="task" v-for="task in tasks">
    <Task @click='$emit("toggle_reminder", task.id)' @delete_task='$emit("delete_task", task.id)' :key='task.id' :task="task"/>
  </div>
</template>

<script>
import Task from "@/components/Task.vue";

export default {
  name: "Tasks",
  components: {
    Task
  },
  props: ['tasks'],
  emits: ['delete_task', 'toggle_reminder']
}

</script>

<style scoped>

</style>
