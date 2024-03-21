<template>
  <div class="settings-container">
    <button class="settings_button" @click="$emit('change_show_button')">{{this.button_show ? 'Turn off button' : 'Turn on button'}}</button>
  </div>
</template>

<script>
export default {
  name: "Settings",
  props: ['button_show'],
  methods: {
    show_button() {
      const settings_button = document.getElementsByClassName('settings_button')
      console.log(settings_button)
      settings_button.innerText = "Button "

    }
  },
  created() {
    this.show_button()
  },
}
</script>

<style scoped>
label {
  margin-left: 2%;
  font-size: 125%;
}

.settings-container {
  margin-top: 7%;
}

.settings_button {
  display: inline-block;
  background: black;
  color: white;
  border: none;
  padding: 3% 6%;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
</style>