<template>
  <div v-if="task_form">
    <TaskForm @add_task='add_task' :task_form="task_form"/>
  </div>
  <Tasks @toggle_reminder='toggle_reminder' @delete_task="delete_task" :tasks="tasks"/>
</template>

<script>
import TaskForm from "@/components/TaskForm.vue";
import Tasks from "@/components/Tasks.vue";

export default {
  name: "Home",
  components: {
    TaskForm,
    Tasks
  },
  props: ['task_form'],

  emits: ['delete_task', 'toggle_reminder',],

  data() {
    return {
      tasks: []
    }
  },

  methods: {
    async getAllTasks() {
      let res = await fetch('api/tasks')
      const data = await res.json()
      return data

      // await fetch('http://localhost:5000/tasks').then(value => value.json(Object)).then(value => {
      //   console.log(value)
      //   return value
      // })
    },

    async getTaskById(task_id) {
      let res = await fetch(`api/tasks/${task_id}`)
      const data = await res.json()
      return data
    },

    async add_task(newTask) {
      const res = await fetch(`api/tasks`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newTask)
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
    },

    async delete_task(task_id) {
      let res = await fetch(`api/tasks/${task_id}`, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        }
      })

      if (res.status === 200) {
        this.tasks = this.tasks.filter((task) => task.id !== task_id)
      } else {
        alert('Error while deleting, try again!')
      }
    },

    async toggle_reminder(task_id) {
      let task_to_toggle = await this.getTaskById(task_id)
      task_to_toggle = {...task_to_toggle, reminder: !task_to_toggle.reminder}

      const res = await fetch(`api/tasks/${task_id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task_to_toggle)
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) => task.id === task_id ? {...task, reminder: data.reminder} : task)
    },
  },

  // based_methods
  async created() {
    this.tasks = await this.getAllTasks()
  },
}
</script>

<style scoped>

</style>