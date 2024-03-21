<template>
  <div class="container">
    <Header text="Task Tracker" :task_form='task_form' @show_form="show_form" :button_show="button_show"/>
    <router-view :task_form="task_form" :button_show="button_show" @change_show_button="change_show_button"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: 'App',

  components: {
    Footer,
    Header
  },

  data() {
    return {
      task_form: false,
      button_show: false
    }
  },

  emits: ['delete_task', 'toggle_reminder', 'show_form', 'add_task', 'change_show_button'],

  methods: {
    show_form() {
      this.task_form = !this.task_form
    },
    change_show_button() {
      this.button_show = !this.button_show
      console.log(this.button_show);
    }
  }
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Poppins', sans-serif;
}

.deactivate {
  display: none;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 100px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;

}

.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>
