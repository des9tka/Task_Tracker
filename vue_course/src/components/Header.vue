<template>
  <div class="header-container">
    <router-link to="/"><h1>{{ text }}</h1></router-link>
    <hr>
    <Button :text="task_form ? 'Close' : 'Add Task'" @show_form='$emit("show_form")' @click="button_navigate" v-show="show_button"/>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import {router} from "@/routers";

export default {
  name: "Header",
  props: ['text', 'task_form', 'button_show'],
  emits: ['show_form'],
  components: {
    Button
  },
  methods: {
    button_navigate() {
      if (this.$route.path !== '/' && this.button_show) {
        router.push('/')
      }
    },
  },
  computed: {
    show_button() {
      if (!this.button_show && this.$route.path !== '/') {
        return false
      } else {
        return true
      }
    }
  }
}

</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: black;
}

.header-container {
  margin: 5px;
  display: flex;
  justify-content: space-between;
}
</style>
