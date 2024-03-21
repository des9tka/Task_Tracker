<template>
  <div>
    <button @click='$emit("show_form")' class="btn">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ['text'],
  emits: ['show_form']
}

</script>

<style scoped>

</style>
