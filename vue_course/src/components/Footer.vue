<template>
  <footer>
    <p>Made by @IMT</p>
    <div class="footer-links-container">
      <router-link to="/settings">Settings</router-link>
      <hr>
      <router-link to="/about">About</router-link>
    </div>

  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
a {
  color: #333
}

footer {
  margin-top: 15%;
  text-align: center;
}

.footer-links-container {
  display: flex;
  justify-content: space-evenly;
  margin: 2% 15% 0%;
}
</style>